import React from 'react';
import './BadUrl.css';
import owlimage from './owl-404.png';

function BadUrl() {
  return (
    <div>
      <img className='badurl-bad-image' src={owlimage} alt='pic of owl' />
    </div>
  );
}

export default BadUrl;
