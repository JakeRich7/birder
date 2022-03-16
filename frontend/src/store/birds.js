const GET_BIRDS = 'birds/getAll';

const getBirds = (allBirds) => {
  return {
    type: GET_BIRDS,
    payload: allBirds,
  };
};

export const getAll = () => async (dispatch) => {
  const response = await fetch("/api/birds", {
    method: "GET",
  });
  const data = await response.json();
  const { birds } = data;
  dispatch(getBirds(birds));
  return response;
};

const initialState = { allBirds: null };

const birdsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_BIRDS:
      newState = Object.assign({}, state);
      newState.allBirds = action.payload;
      return newState;
    default:
      return state;
  }
};

export default birdsReducer;
