import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './Bird.css';
import Sighting from '../Sighting';
import * as sightingActions from "../../store/sightings";
import SimpleMap from '../GoogleMap';
import Geocode from "react-geocode";

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
  const [errors, setErrors] = useState([]);
  const [addSightingText, setAddSightingText] = useState('Add Sighting');
  const [lati, setLati] = useState(-36.375381);
  const [long, setLong] = useState(-137.682543);
  const [addressToConvert, setAddressToConvert] = useState('pacific ocean');
  const [message, setMessage] = useState("Click on any sighting to view it's location HERE");
  const [addressFirstPass, setAddressFirstPass] = useState(true);

  Geocode.setApiKey(process.env.REACT_APP_GEOCODE_API_KEY);

  useEffect(() => {
    Geocode.fromAddress(addressToConvert).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        setLati(lat);
        setLong(lng);
        if (!addressFirstPass) {
          setMessage('');
        } else {
          setAddressFirstPass(false)
        }
      },
      (error) => {
        setLati(-38.375381);
        setLong(-139.682543);
        setMessage('The address for this sighting is invalid');
      }
    )
  }, [addressToConvert]);

  useEffect(() => {
    if (allBirds) {
      allBirds.forEach(ele => {
        if (ele.id === Number(id)) {
          setMyBird(ele);
          if (ele.conservation_status === 'Least Concern') {
            setMyStatusColor('green');
          }
          if (ele.conservation_status === 'Vulnerable') {
            setMyStatusColor('orange');
          }
          if (ele.conservation_status === 'Near Threatened') {
            setMyStatusColor('yellow');
          }
        }
      })
    }
  }, [allBirds, id]);

  useEffect(() => {
    let birdsArr = []
    if (allSightings) {
      allSightings.forEach(ele => {
        if (ele.bird_id === Number(id)) {
          birdsArr.push(ele);
        }
      })
    }
    setBirdSightings(birdsArr);
  }, [allSightings, id])

  const toggleForm = async (e) => {
    setFormStatus(!formStatus);
    if (addSightingText === 'Add Sighting') {
      setAddSightingText('Cancel')
    } else {
      setAddSightingText('Add Sighting')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let mySighting = await dispatch(sightingActions.createOne({ user_id: userId, bird_id: Number(id), address, details }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      })
    if (!mySighting) {
      return
    }
    let newArr = [];
    birdSightings.forEach(ele => {
      newArr.push(ele);
    })
    newArr.push(mySighting);
    setBirdSightings(newArr);
    setAddress('');
    setDetails('');
    setErrors([]);
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
        <div className='bird-maps-div'>
          {
            <SimpleMap lat={lati} lng={long} message={message} />
          }
        </div>
        <div className='bird-sightings-div'>
          {
            birdSightings &&
            birdSightings.map(ele => {
              return <div onClick={(e) => setAddressToConvert(ele.address)} key={ele.id} >
                <Sighting sighting={ele} />
              </div>
            })
          }
        </div>
        <div className='bird-add-sighting-div'>
          <button onClick={toggleForm} className='bird-add-sighting-button'>{addSightingText}</button>
          {
            formStatus &&
            <form className='bird-upload-adress-form'>
              <ul className='bird-add-comment-error-ul'>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
              </ul>
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
              <div className='bird-address-characters-div'>
                <div className='bird-address-characters'>{50 - address.length + ' characters left'}</div>
              </div>
              <label className="bird-details-label">
                Details:
              </label>
              <textarea
                className="bird-upload-details"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                required
              />
              <div className='bird-details-characters-div'>
                <div className='bird-details-characters'>{500 - details.length + ' characters left'}</div>
              </div>
              <button className="bird-upload-create-button-link" onClick={handleSubmit}>Submit</button>
            </form>
          }
        </div>
      </div>
    </div>
  );
}

export default Bird;
