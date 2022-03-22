import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './Discover.css';
import { NavLink } from 'react-router-dom';

function Discover() {
  const allBirds = useSelector(state => state.birds.allBirds);
  const [birdsToDisplay, setBirdsToDisplay] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    let newBirdArr = [];
    allBirds.forEach(ele => {
      newBirdArr.push(ele);
    });
    setBirdsToDisplay(newBirdArr);
  }, [allBirds])

  useEffect(() => {
    let newArr = [];
    allBirds.forEach(ele => {
      let commonName = ele.common_name.toLowerCase();
      let scientificName = ele.scientific_name.toLowerCase();
      if (commonName.indexOf(search.toLowerCase()) >= 0 || scientificName.indexOf(search.toLowerCase()) >= 0) {
        newArr.push(ele);
      }
    })
    setBirdsToDisplay(newArr)
  }, [allBirds, search])

  if (!allBirds) {
    return (
      <div className='discover-loading'>Loading...</div>
    )
  }

  return (
    <div>
      <div className='discover-search-box-div'>
        <input onChange={(e) => setSearch(e.target.value)} className='discover-search-box' placeholder='Search' />
      </div>
      {
        birdsToDisplay.map(ele => (
          <div key={ele.id} className='discover-main-div'>
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
