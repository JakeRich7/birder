import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import * as sessionActions from '../../store/session';
import { useDispatch } from 'react-redux';

function Navigation({ isLoaded }) {
  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    return dispatch(sessionActions.login({ credential: "tweetybird55", password: "password1" }))
  }

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <div className='navigation-discover-mybirder-div'>
          <div className='navigation-discover-mybirder'>
            <NavLink className='discover-button' to="/discover">Discover</NavLink>
            <NavLink className='mybirder-button' to="/mybirder">MyBirder</NavLink>
          </div>
        </div>
        <ProfileButton user={sessionUser} />
      </>
    );
  } else {
    sessionLinks = (
      <>
        <div>
          <NavLink className='login-button' to="/login">Log In</NavLink>
          <NavLink className='signup-button' to="/signup">Sign Up</NavLink>
          <a href='/' className='demouser-button' onClick={handleSubmit}>Demo User</a>
        </div>
      </>
    );
  }

  return (
    <ul className='nav-bar-ul'>
      <li className='nav-bar-li'>
        <div>
          <NavLink className='home-button' exact to="/">Home</NavLink>
          <NavLink className='about-button' to="/about">About</NavLink>
        </div>
        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;
