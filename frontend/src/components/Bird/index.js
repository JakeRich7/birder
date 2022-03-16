import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './Bird.css';

function Bird() {
  const { id } = useParams();
  const allBirds = useSelector(state => state.birds.allBirds);
  const allSightings = useSelector(state => state.sightings.allSightings);
  const [myBird, setMyBird] = useState('');

  useEffect(() => {
    if (allBirds) {
      allBirds.forEach(ele => {
        if (ele.id === Number(id)) {
          setMyBird(ele);
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
    <div>
      {
        myBird &&
        myBird.common_name
      }
      {/* {
        allSightings &&
        allSightings.map(ele => {
          return ele.details
        })
      } */}
    </div>
  );
}

export default Bird;
