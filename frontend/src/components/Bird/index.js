import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './Bird.css';
import Sighting from '../Sighting';
import * as sightingActions from "../../store/sightings";

function Bird() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const allBirds = useSelector(state => state.birds.allBirds);
  const allSightings = useSelector(state => state.sightings.allSightings);
  const userId = useSelector(state => state.session.user.id);
  const [myBird, setMyBird] = useState('');
  const [myStatusColor, setMyStatusColor] = useState('rgb(213, 247, 255)');
  const [birdSightings, setBirdSightings] = useState([]);
  const [formStatus, setFormStatus] = useState(false);
  const [address, setAddress] = useState("");
  const [details, setDetails] = useState("");

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

  useEffect(() => {
    if (allSightings) {
      let birdsArr = []
      allSightings.forEach(ele => {
        if (ele.bird_id === Number(id)) {
          birdsArr.push(ele);
        }
      })
      setBirdSightings(birdsArr);
    }
  }, [allSightings, id])

  const toggleForm = async (e) => {
    setFormStatus(!formStatus);
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let mySighting = await dispatch(sightingActions.createOne({ user_id: userId, bird_id: Number(id) ,address, details }));
    let newArr = [];
    birdSightings.forEach(ele => {
      newArr.push(ele);
    })
    newArr.push(mySighting);
    setBirdSightings(newArr);
    toggleForm();
    return;
  }

  if (!allBirds || !allSightings || !myBird) {
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
                <div style={{ backgroundColor: myStatusColor }} className='bird-status'>{myBird.conservation_status}</div>
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
        <div>
          {
            birdSightings &&
            birdSightings.map(ele => {
              return <Sighting key={ele.id} sighting={ele} />
            })
          }
        </div>
        <div className='bird-add-sighting-div'>
          <button onClick={toggleForm} className='bird-add-sighting-button'>Add Sighting</button>
          {
            formStatus &&
            <form className='bird-upload-adress-form'>
              <label className="bird-address-label">
                Address:
              </label>
              <input
                className="bird-upload-address"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
              <label className="bird-details-label">
                Details:
              </label>
              <textarea
                className="bird-upload-details"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                required
              />
              <button className="bird-upload-create-button-link" onClick={handleSubmit}>Submit</button>
            </form>
          }
        </div>
      </div>
    </div>
  );
}

export default Bird;
