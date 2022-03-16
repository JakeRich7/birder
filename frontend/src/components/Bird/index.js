import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './Bird.css';

function Bird() {
  const { id } = useParams();
  const allBirds = useSelector(state => state.birds.allBirds);
  const allSightings = useSelector(state => state.sightings.allSightings);
  const [myBird, setMyBird] = useState('');
  const [myStatusColor, setMyStatusColor] = useState('rgb(213, 247, 255)');

  useEffect(() => {
    if (allBirds) {
      allBirds.forEach(ele => {
        if (ele.id === Number(id)) {
          setMyBird(ele);
          if (ele.conservation_status === 'Least Concern') {
            setMyStatusColor('green');
          }
        }
      })
    }
  }, [allBirds, id]);

  if (!allBirds) {
    return (
      <div className='bird-loading'>Loading...</div>
    )
  }

  return (
    <div className='bird-fullpage'>
      <div className='bird-innerpage'>
        <img className='bird-image' src={`${myBird.image}`} alt='awesome bird pic here' />
        <div className='bird-descriptive-content'>
          <div className='bird-grey-content'>
            <div className='bird-names-and-status'>
              <div className='bird-names'>
                <div className='bird-name'>{myBird.common_name}</div>
                <div className='bird-sname'>{`- ${myBird.scientific_name}`}</div>
                <div className='bird-family'>{myBird.family}</div>
              </div>
              <div>
                <div style={{backgroundColor: myStatusColor}} className='bird-status'>{myBird.conservation_status}</div>
              </div>
            </div>
            <div className='bird-full-description-div'>
              <div className='bird-description-header'>Description:</div>
              <div className='bird-description'>{myBird.description}</div>
            </div>
            <div className='bird-range-main-div'>
              <div className='bird-range-header'>Range:</div>
              <div className='bird-range'>{myBird.range}</div>
            </div>
            <audio className='bird-sound' controls src={myBird.sounds} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bird;
