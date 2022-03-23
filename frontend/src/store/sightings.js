import { csrfFetch } from "./csrf";

const GET_SIGHTINGS = 'sightings/getAll';
const POST_SIGHTING = 'sightings/postOne';
const DELETE_SIGHTING = 'sightings/deleteOne';
const EDIT_SIGHTING = 'sightings/editOne';

const getSightings = (allSightings) => {
  return {
    type: GET_SIGHTINGS,
    payload: allSightings,
  };
};

const postSighting = (newSighting) => {
  return {
    type: POST_SIGHTING,
    payload: newSighting,
  }
}

const editSighting = (editedSighting) => {
  return {
    type: EDIT_SIGHTING,
    payload: editedSighting,
  }
}

const deleteSighting = (id) => {
  return {
    type: DELETE_SIGHTING,
    payload: id
  };
};

export const getAll = () => async (dispatch) => {
  const response = await fetch("/api/sightings", {
    method: "GET",
  });
  const data = await response.json();
  const { sightings } = data;
  dispatch(getSightings(sightings));
  return response;
};

export const createOne = (newSighting) => async (dispatch) => {
  const { user_id, bird_id, address, details } = newSighting;
  const response = await csrfFetch('/api/sightings', {
    method: 'POST',
    body: JSON.stringify({
      user_id,
      bird_id,
      address,
      details
    }),
  });
  const data = await response.json();
  const { sighting } = data;
  dispatch(postSighting(sighting));
  return sighting;
};

export const editOne = (sightingData) => async (dispatch) => {
  const { id, address, details } = sightingData;
  const response = await csrfFetch('/api/sightings', {
    method: 'PUT',
    body: JSON.stringify({
      id,
      address,
      details
    }),
  });
  const data = await response.json();
  const { sighting } = data;
  dispatch(editSighting(sighting));
  return sighting;
};

export const deleteOne = (id) => async (dispatch) => {
  await csrfFetch(`/api/sightings/${id}`, {
    method: 'DELETE'
  })
  dispatch(deleteSighting(id));
  return id;
}

const initialState = { allSightings: null };

const sightingsReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case GET_SIGHTINGS:
      newState.allSightings = action.payload;
      return newState;
    case POST_SIGHTING:
      newState.allSightings.push(action.payload);
      return newState;
    case EDIT_SIGHTING:
      let index = 0;
      for (let i = 0; i < newState.allSightings.length; i++) {
        if (newState.allSightings[i].id === action.payload.id) {
          index = i
        }
      }
      newState.allSightings.splice(index, 1, action.payload);
      return newState;
    case DELETE_SIGHTING:
      let newIndex = 0;
      for (let i = 0; i < newState.allSightings.length; i++) {
        if (newState.allSightings[i].id === action.payload) {
          newIndex = i
        }
      }
      newState.allSightings.splice(newIndex, 1);
      return newState;
    default:
      return state;
  }
};

export default sightingsReducer;
