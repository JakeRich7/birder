import React, { useState } from 'react';
import './Sighting.css';
import { useDispatch, useSelector } from 'react-redux';
import * as sightingActions from "../../store/sightings";

function Sighting({ sighting }) {
  const dispatch = useDispatch();
  const id = useSelector(state => state.session.user.id);
  const [isHere, setIsHere] = useState(true);
  const [editStatus, setEditStatus] = useState(false);
  const [address, setAddress] = useState("");
  const [details, setDetails] = useState("");
  const [sightingDetails, setSightingDetails] = useState(sighting.details);
  const [sightingAddress, setSightingAddress] = useState(sighting.address);

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

  const handleEdit = async (e) => {
    e.preventDefault();
    let sightingId = sighting.id;
    const response = await dispatch(sightingActions.editOne({id: sightingId, address, details}));
    setSightingDetails(response.details);
    setSightingAddress(response.address);
    handleToggle();
  }

  if (!isHere) {
    return null;
  }

  return (
    <div className='sighting-div'>
      <div>
        <div className='sighting-address-header'>Sighting Location:</div>
        <div className='sighting-address'>{sightingAddress}</div>
        <div className='sighting-details-header'>Sighting Details:</div>
        <div className='sighting-details'>{sightingDetails}</div>
        {
          id === sighting.user_id &&
          <div className='sighting-edit-delete-div' >
            <button onClick={handleToggle} className='sighting-edit-button'>Edit</button>
            <button onClick={handleDelete} className='sighting-delete-button'>Delete</button>
            {
              editStatus &&
              <form onSubmit={handleEdit}>
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
        }
      </div>
      <div className='sighting-user'>{`- ${sighting.User.username}`}</div>
    </div>
  );
}

export default Sighting;
