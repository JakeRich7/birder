import { csrfFetch } from "./csrf";

const GET_COMMENTS = 'comments/getAll';
const POST_COMMENT = 'comments/postOne';
const DELETE_COMMENT = 'comments/deleteOne';
const EDIT_COMMENT = 'comments/editOne';

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

const editComment = (myEditedComment) => {
  return {
    type: EDIT_COMMENT,
    payload: myEditedComment,
  }
}

const deleteComment = (id) => {
  return {
    type: DELETE_COMMENT,
    payload: id
  };
};

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

export const editOne = (commentData) => async (dispatch) => {
  const { id, body } = commentData;
  const response = await csrfFetch('/api/comments', {
    method: 'PUT',
    body: JSON.stringify({
      id,
      body
    }),
  });
  const data = await response.json();
  const { comment } = data;
  dispatch(editComment(comment));
  return comment;
};

export const deleteOne = (id) => async (dispatch) => {
  await csrfFetch(`/api/comments/${id}`, {
    method: 'DELETE'
  })
  dispatch(deleteComment(id));
  return id;
}

const initialState = { allComments: null };

const commentsReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case GET_COMMENTS:
      newState.allComments = action.payload;
      return newState;
    case POST_COMMENT:
      newState.allComments.push(action.payload);
      return newState;
    case EDIT_COMMENT:
      let index = 0;
      for (let i = 0; i < newState.allComments.length; i++) {
        if (newState.allComments[i].id === action.payload.id) {
          index = i
        }
      }
      newState.allComments.splice(index, 1, action.payload);
      return newState;
    case DELETE_COMMENT:
      let newIndex = 0;
      for (let i = 0; i < newState; i++) {
        if (newState.allComments[i].id === action.payload) {
          newIndex = i
        }
      }
      newState.allComments.splice(newIndex, 1);
      return newState;
    default:
      return state;
  }
};

export default commentsReducer;
