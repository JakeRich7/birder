import { csrfFetch } from "./csrf";

const GET_COMMENTS = 'comments/getAll';
const POST_COMMENT = 'comments/postOne';

const getComments = (allComments) => {
  return {
    type: GET_COMMENTS,
    payload: allComments,
  };
};

const postComment = (newComment) => {
  return {
    type: POST_COMMENT,
    payload: newComment,
  }
}

export const getAll = () => async (dispatch) => {
  const response = await fetch("/api/comments", {
    method: "GET",
  });
  const data = await response.json();
  const { comments } = data;
  dispatch(getComments(comments));
  return response;
};

export const createOne = (newComment) => async (dispatch) => {
  const { user_id, sighting_id, body } = newComment;
  const response = await csrfFetch('/api/comments', {
    method: 'POST',
    body: JSON.stringify({
      user_id,
      sighting_id,
      body
    }),
  });
  const data = await response.json();
  const { comment } = data;
  dispatch(postComment(comment));
  return comment;
};

const initialState = { allComments: null };

const commentsReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case GET_COMMENTS:
      newState = Object.assign({}, state);
      newState.allComments = action.payload;
      return newState;
    case POST_COMMENT:
      newState.allComments.push(action.payload);
      return newState;
    default:
      return state;
  }
};

export default commentsReducer;
