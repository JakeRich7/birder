import { csrfFetch } from "./csrf";

const GET_SIGHTINGS = 'sightings/getAll';
const POST_SIGHTING = 'sightings/postOne';

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

const initialState = { allSightings: null };

const sightingsReducer = (state = initialState, action) => {
  let newState = {...state};
  switch (action.type) {
    case GET_SIGHTINGS:
      newState.allSightings = action.payload;
      return newState;
    case POST_SIGHTING:
      newState.allSightings.push(action.payload);
      return newState;
    default:
      return state;
  }
};

export default sightingsReducer;
