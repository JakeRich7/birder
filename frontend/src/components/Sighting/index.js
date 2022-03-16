import React from 'react';
import './Sighting.css';

function Sighting({ sighting }) {
  return (
    <div className='about-div'>
      <div className='about-details-header'>Sighting Details:</div>
      <div className='about-details'>{sighting.details}</div>
      <div className='about-user'>{`- ${sighting.User.username}`}</div>
    </div>
  );
}

export default Sighting;
