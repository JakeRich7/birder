import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as commentActions from "../../store/comments";
import './Comment.css';


function Comment({ comment, id }) {
  const dispatch = useDispatch();
  const [editStatus, setEditStatus] = useState(false);
  const [body, setBody] = useState(comment.body);
  const [commentBody, setCommentBody] = useState(comment.body);
  const [isHere, setIsHere] = useState(true);
  const [errors, setErrors] = useState([]);
  const [showEditText, setShowEditText] = useState('Edit');

  const handleDelete = async (e) => {
    e.preventDefault();
    await dispatch(commentActions.deleteOne(comment.id));
    setIsHere(false);
    return;
  }

  const handleToggle = async (e) => {
    setEditStatus(!editStatus);
    if (showEditText === 'Edit') {
      setShowEditText('Cancel')
    } else {
      setShowEditText('Edit')
    }
  }

  const handleEdit = async (e) => {
    e.preventDefault();
    const response = await dispatch(commentActions.editOne({ id: comment.id, body }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      })
    if (!response) {
      return
    }
    setErrors([])
    setCommentBody(response.body);
    handleToggle();
  }

  if (!isHere) {
    return null;
  }

  return (
    <div>
      <div className='comment-main-box'>
        <div className='comment-main-body'>
          {commentBody}
        </div>
        <div className='comment-username-div'>
          {`- ${comment.User.username}`}
        </div>
        <div>
          {
            id === comment.user_id &&
            <>
              <button onClick={handleToggle} className='comment-edit-button'>{showEditText}</button>
              <button onClick={handleDelete} className='comment-delete-button'>Delete</button>
            </>
          }
        </div>
        <div>
          {
            editStatus &&
            <form className='comment-body-form'>
              <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
              </ul>
              <label className="comment-body-label">
                Body:
              </label>
              <textarea
                className="comment-upload-body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                required
              />
              <div className='comment-body-characters-div'>
                <div className='comment-body-characters'>{250 - body.length + ' characters left'}</div>
              </div>
              <button className="comment-upload-create-button-link" onClick={handleEdit}>Confirm Edit</button>
            </form>
          }
        </div>
      </div>
    </div>
  );
}

export default Comment;
