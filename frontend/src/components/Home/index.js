import React from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <div className='home-main-div'>
      <div className='home-inner-div'>
        <div className='home-content-div'>
          <div className='home-text-heading'>
            Discover a new world of birding...
          </div>
          <div className='home-auth-buttons'>
            <NavLink className='home-signup-button' to='/signup'>Get Started</NavLink>
          </div>
        </div>
        <img className='home-main-img' src='https://res.cloudinary.com/dd9pletih/image/upload/v1647389985/fiery_throated_hummingbird_ty9kvh.jpg' alt='home main pic' />
      </div>
    </div>
  );
}

export default Home;
