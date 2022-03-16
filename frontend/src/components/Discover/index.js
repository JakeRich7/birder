import React from 'react';
import { useSelector } from 'react-redux';
import './Discover.css';

function Discover() {
  const allBirds = useSelector(state => state.birds.allBirds);

  if (!allBirds) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <div>
      {/* <img src='https://user-images.githubusercontent.com/88405940/158489382-2fdfe4c4-67e4-429a-89e3-84e27b1680b0.jpeg' /> */}
      {/* <audio controls src='https://res.cloudinary.com/dd9pletih/video/upload/v1647389983/fiery_throated_hummingbird_g2csua.mp3' /> */}
      {
        allBirds.map(ele => (
          <>
            <div>
              hiii
            </div>
          </>
        ))
      }
    </div>
  )
}

export default Discover;
