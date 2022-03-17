import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './Comment.css';

function Comment({ comment, id }) {
  const [editStatus, setEditStatus] = useState(false);
  const [body, setBody] = useState("");

  const handleDelete = async (e) => {
    e.preventDefault();
    // let sightingId = sighting.id;
    // await dispatch(sightingActions.deleteOne(sightingId));
    // setIsHere(false);
    // return;
  }

  const handleToggle = async (e) => {
    setEditStatus(!editStatus);
  }

  const handleEdit = async (e) => {
    e.preventDefault();
    // let sightingId = sighting.id;
    // const response = await dispatch(sightingActions.editOne({ id: sightingId, address, details }));
    // setSightingDetails(response.details);
    // setSightingAddress(response.address);
    // handleToggle();
  }

  return (
    <div>
      <div className='comment-main-box'>
        <div>
          {comment.body}
        </div>
        <div>
          {
            id === comment.user_id &&
            <>
              <button onClick={handleToggle} className='comment-edit-button'>Edit</button>
              <button onClick={handleDelete} className='comment-delete-button'>Delete</button>
            </>
          }
        </div>
        <div>
          {
            editStatus &&
            <form onSubmit={handleEdit}>
              <label className="comment-body-label">
                Body:
              </label>
              <textarea
                className="comment-upload-body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                required
              />
              <button className="comment-upload-create-button-link" onClick={handleEdit}>Confirm Edit</button>
            </form>
          }
        </div>
      </div>
    </div>
  );
}

export default Comment;
