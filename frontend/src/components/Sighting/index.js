import React from 'react';
import './Sighting.css';

function Sighting({ sighting }) {
  return (
    <div className='sighting-div'>
      <div className='sighting-details-header'>Sighting Details:</div>
      <div className='sighting-details'>{sighting.details}</div>
      <div className='sighting-user'>{`- ${sighting.User.username}`}</div>
    </div>
  );
}

export default Sighting;
