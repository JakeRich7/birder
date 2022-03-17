import React, { useState } from 'react';
import './Sighting.css';
import { useDispatch, useSelector } from 'react-redux';
import * as sightingActions from "../../store/sightings";

function Sighting({ sighting }) {
  const dispatch = useDispatch();
  const id = useSelector(state => state.session.user.id);
  const [isHere, setIsHere] = useState(true);

  const handleDelete = async (e) => {
    e.preventDefault()
    let sightingId = sighting.id
    await dispatch(sightingActions.deleteOne(sightingId));
    setIsHere(false);
    return;
  }

  if (!isHere) {
    return null;
  }

  return (
    <div className='sighting-div'>
      <div>
        <div className='sighting-details-header'>Sighting Details:</div>
        <div className='sighting-details'>{sighting.details}</div>
        {
          id === sighting.user_id &&
          <div className='sighting-edit-delete-div' >
            <button className='sighting-edit-button'>Edit</button>
            <button onClick={handleDelete} className='sighting-delete-button'>Delete</button>
          </div>
        }
      </div>
      <div className='sighting-user'>{`- ${sighting.User.username}`}</div>
    </div>
  );
}

export default Sighting;
