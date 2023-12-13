import React from 'react';
import './cta.css';

const CTA = () => {
  return (
    <div className='cta' id='learn'>
      <div className='cta-content'>
        <p>Request Early Access for Tech-Enhanced Learning</p>
        <h3>Register Today & Begin Your Journey into Modern Education.</h3>
      </div>
      <div className='cta-btn'>
        <a href="https://learn.shotstech.com" rel='noreferrer' target='_blank'><button type='button'>Get Started</button></a>
      </div>
    </div>
  )
}

export default CTA
