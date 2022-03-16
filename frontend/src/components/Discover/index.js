import React from 'react';
import { useSelector } from 'react-redux';
import './Discover.css';
import { NavLink } from 'react-router-dom';

function Discover() {
  const allBirds = useSelector(state => state.birds.allBirds);

  if (!allBirds) {
    return (
      <div className='discover-loading'>Loading...</div>
    )
  }

  return (
    <div>
      {
        allBirds.map(ele => (
          <div className='discover-main-div'>
            <div className='discover-image-div'>
              <NavLink to={`/discover/${ele.id}`}><img className='discover-image' src={ele.image} alt='bird-pic' /></NavLink>
            </div>
            <div className='discover-main-content'>
              <div>
                <NavLink to={`/discover/${ele.id}`} className='discover-name-link'><div className='discover-name'>{ele.common_name}</div></NavLink>
                <div className='discover-sname'>{`- ${ele.scientific_name}`}</div>
              </div>
              <div>
                <div className='discover-description-header'>Description:</div>
                <div className='discover-description'>{ele.description}</div>
              </div>
              <audio className='discover-sound' controls src={ele.sounds} />
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Discover;
