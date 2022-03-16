const GET_SIGHTINGS = 'sightings/getAll';

const getSightings = (allSightings) => {
  return {
    type: GET_SIGHTINGS,
    payload: allSightings,
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

const initialState = { allSightings: null };

const sightingsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_SIGHTINGS:
      newState = Object.assign({}, state);
      newState.allSightings = action.payload;
      return newState;
    default:
      return state;
  }
};

export default sightingsReducer;
