import React from 'react';
import './Sighting.css';

function Sighting({ sighting }) {
  console.log(sighting)

  return (
    <div className='about-div'>
      {sighting.details}
    </div>
  );
}

export default Sighting;
