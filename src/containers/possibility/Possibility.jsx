import React from 'react';
import Image from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className='service section__padding' id='solutions'>
    <div className='service-image'>
      <img src={Image} alt="img" />
    </div>
    <div className='service-content'>
      <h4>Request Early Access to Get Started</h4>
      <h1 className='gradient__text'>Empowering Growth <br /> Through Tailored Services</h1>
      <p>Technology isn't just a tool—it's the foundation of our innovative approach. Our cutting-edge tech drives the creation, curation, and delivery of engaging, bite-sized knowledge, transforming traditional learning paradigms.</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;