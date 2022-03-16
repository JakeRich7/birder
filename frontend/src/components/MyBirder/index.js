import React, { useEffect, useState } from 'react';
import './MyBirder.css';
import Sighting from '../Sighting';
import { useSelector } from 'react-redux';

function MyBirder() {
  const id = useSelector(state => state.session.user.id)
  const allSightings = useSelector(state => state.sightings.allSightings);
  const [birdSightings, setBirdSightings] = useState([]);

  useEffect(() => {
    if (allSightings) {
      let birdsArr = []
      allSightings.forEach(ele => {
        if (ele.user_id === Number(id)) {
          birdsArr.push(ele);
        }
      })
      setBirdSightings(birdsArr);
    }
  }, [allSightings, id])

  if (!allSightings) {
    return (
      <div className='mybirder-loading'>Loading...</div>
    )
  }

  return (
    <div className='mybirder-fullpage'>
      <div className='mybirder-innerpage'>
        {
          birdSightings &&
          birdSightings.map(ele => {
            return <>
              <div className='mybirder-bird-name'>{ele.Bird.common_name}</div>
              <Sighting key={ele.id} sighting={ele} />
            </>
          })
        }
      </div>
    </div>
  );
}

export default MyBirder;
