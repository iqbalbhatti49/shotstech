import React, { useState } from 'react';
import './header.css';
import axios from 'axios'
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {

  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      Email: email
    }

    axios.post('https://sheet.best/api/sheets/5a947856-2563-4729-8424-fe9cedfe87de', data).then((response) => {
      setEmail("You're now part of our community");
      let emailField = document.getElementById('email');
      emailField.disabled = true;
      emailField.style.textAlign = 'center';
      document.getElementById('submit-btn').style.display = 'none';
    })

    // let p = document.getElementById('after-email');

    // setTimeout(() => {  
    //   p.style.display = 'none'
    // }, 2000);

    // p.style.display = 'block'
  }

  // const scriptURL = 'https://script.google.com/macros/s/AKfycbwGzLpzZYlqAufmYzysWiquC1grzbb6JsClnl2zI5DeqyUGHEwyfjTCHu_mWgV1hfw/exec';

  return (
  <div className='shots__header section__padding' id='home'>
    <div className='shots__header-content'>
      <h1 className='gradient__text'>Shots Redefines Tech Excellence</h1>
      <p>We're trailblazers in tech innovation. With a relentless pursuit of excellence, we redefine what's possible. Our dedicated team crafts solutions that transcend norms, ensuring they evolve with your needs. Join us in shaping tomorrow's world today.</p>

      <form method='post' onSubmit={handleSubmit} className='shots__header-content__input' name='submit-email'>
          <input 
            type="email" 
            name='email' 
            className='input' 
            id='email' 
            placeholder='Enter Email Address' 
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required />
          <input type='submit' className='button' id='submit-btn' value="Get Started" />
      </form>

      {/* <p id='after-email' style={{display: 'none', color: 'white', marginTop: '0px'}}>Thank You! You're now part of our community</p> */}

      <div className='shots__header-content__people'>
        <img src={people} alt='peoples' />
        <p>visiters in last 24 hours</p>
      </div>
    </div>

    <div className='shots__header-image'>
      <img src={ai} alt="" />
    </div>
  </div>
  );
}

export default Header
