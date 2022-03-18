import React, { useEffect, useState } from 'react';
import './Sighting.css';
import { useDispatch, useSelector } from 'react-redux';
import * as sightingActions from "../../store/sightings";
import * as commentActions from "../../store/comments";
import Comment from '../Comment';

function Sighting({ sighting }) {
  const dispatch = useDispatch();
  const id = useSelector(state => state.session.user.id);
  const allComments = useSelector(state => state.comments.allComments);
  const [isHere, setIsHere] = useState(true);
  const [editStatus, setEditStatus] = useState(false);
  const [addCommentStatus, setAddCommentStatus] = useState(false);
  const [address, setAddress] = useState("");
  const [details, setDetails] = useState("");
  const [sightingDetails, setSightingDetails] = useState(sighting.details);
  const [sightingAddress, setSightingAddress] = useState(sighting.address);
  const [commentStatus, setCommentStatus] = useState(false);
  const [sightingComments, setSightingComments] = useState([]);
  const [body, setBody] = useState("");
  const [errors, setErrors] = useState([]);
  const [commentErrors, setCommentErrors] = useState([]);

  useEffect(() => {
    let newArr = [];
    allComments.forEach(ele => {
      if (ele.sighting_id === sighting.id) {
        newArr.push(ele);
      }
    });
    setSightingComments(newArr);
  }, [allComments, sighting.id])

  const handleDelete = async (e) => {
    e.preventDefault();
    let sightingId = sighting.id;
    await dispatch(sightingActions.deleteOne(sightingId));
    setIsHere(false);
    return;
  }

  const handleToggle = async (e) => {
    setEditStatus(!editStatus);
  }

  const toggleComment = async (e) => {
    setAddCommentStatus(!addCommentStatus);
  }

  const handleComments = async (e) => {
    setCommentStatus(!commentStatus);
  }

  const handleEdit = async (e) => {
    e.preventDefault();
    let sightingId = sighting.id;
    const response = await dispatch(sightingActions.editOne({ id: sightingId, address, details }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      })
    if (!response) {
      return
    }
    setSightingDetails(response.details);
    setSightingAddress(response.address);
    handleToggle();
  }

  const handleAddComment = async (e) => {
    e.preventDefault();
    let sightingId = sighting.id;
    let myComment = await dispatch(commentActions.createOne({ user_id: id, sighting_id: sightingId, body }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setCommentErrors(data.errors);
      })
    if (!myComment) {
      return
    }
    let newArr = [];
    sightingComments.forEach(ele => {
      newArr.push(ele);
    })
    newArr.push(myComment);
    setSightingComments(newArr);

    toggleComment();
    return myComment;
  }

  if (!isHere || !allComments) {
    return null;
  }

  return (
    <>
      <div className='sighting-div'>
        <div>
          <div className='sighting-address-header'>Sighting Location:</div>
          <div className='sighting-address'>{sightingAddress}</div>
          <div className='sighting-details-header'>Sighting Details:</div>
          <div className='sighting-details'>{sightingDetails}</div>
          <div className='sighting-buttons-div'>
            {
              id === sighting.user_id &&
              <div className='sighting-edit-delete-div' >
                <button onClick={handleToggle} className='sighting-edit-button'>Edit</button>
                <button onClick={handleDelete} className='sighting-delete-button'>Delete</button>
              </div>
            }
            <button onClick={handleComments} className='sighting-comments-button'>Show Comments</button>
          </div>
          {
            editStatus &&
            <form className='sighting-address-details-form'>
              <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
              </ul>
              <label className="sighting-address-label">
                Address:
              </label>
              <input
                className="sighting-upload-address"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
              <label className="sighting-details-label">
                Details:
              </label>
              <textarea
                className="sighting-upload-details"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                required
              />
              <button className="sighting-upload-create-button-link" onClick={handleEdit}>Confirm Edit</button>
            </form>
          }
        </div>
        <div className='sighting-user'>{`- ${sighting.User.username}`}</div>
      </div>
      {
        commentStatus &&
        <div className='sighting-all-comments-div'>
          {
            sightingComments.map(ele => {
              return <Comment key={ele.id} comment={ele} id={id} />
            })
          }
        </div>
      }
      {
        commentStatus &&
        <div className='sighting-add-comment'>
          <button onClick={toggleComment} className='sighting-add-comment-button'>Add Comment</button>
        </div>
      }
      {
        addCommentStatus &&
        <form className='sighting-upload-comment-form'>
          <ul className='sighting-add-comment-error-ul'>
            {commentErrors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul>
          <label className="sighting-upload-body-label">
            Body:
          </label>
          <textarea
            className="sighting-upload-body-textarea"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
          <button className="sighting-upload-body-submit" onClick={handleAddComment}>Submit</button>
        </form>
      }
    </>
  );
}

export default Sighting;
