import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as commentActions from "../../store/comments";
import './Comment.css';


function Comment({ comment, id }) {
  const dispatch = useDispatch();
  const [editStatus, setEditStatus] = useState(false);
  const [body, setBody] = useState("");
  const [isHere, setIsHere] = useState(true);

  const handleDelete = async (e) => {
    e.preventDefault();
    await dispatch(commentActions.deleteOne(comment.id));
    setIsHere(false);
    return;
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

  if (!isHere) {
    return null;
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
            <form>
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
