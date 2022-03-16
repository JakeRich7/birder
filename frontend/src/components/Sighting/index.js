import React from 'react';
import './Sighting.css';
import { useSelector } from 'react-redux';

function Sighting({ sighting }) {
  const id = useSelector(state => state.session.user.id);

  return (
    <div className='sighting-div'>
      <div>
        <div className='sighting-details-header'>Sighting Details:</div>
        <div className='sighting-details'>{sighting.details}</div>
        {
          id === sighting.user_id &&
          <div className='sighting-edit-delete-div' >
            <button className='sighting-edit-button'>Edit</button>
            <button className='sighting-delete-button'>Delete</button>
          </div>
        }
      </div>
      <div className='sighting-user'>{`- ${sighting.User.username}`}</div>
    </div>
  );
}

export default Sighting;
