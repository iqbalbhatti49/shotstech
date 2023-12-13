import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo2.svg';
import './navbar.css';
const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='shots__navbar' id='nav'>
      <div className='shots__navbar-links'>
        <div className='shots__navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='shots__navbar-links_container'>
          <p><a href="#home">Home</a></p>
          <p><a href="#about">About Us</a></p>
          <p><a href="#services">Service</a></p>
          <p><a href="#solutions">Solutions</a></p>
          <p><a href="#blogs">Blogs</a></p>
          <p><a href="#learn">Learn</a></p>
        </div>
      </div>
      <div className='shots__navbar-sign'>
        <p>
          <a href="#nav">Sign In</a>
        </p>
        <button type='button' style={{cursor: 'not-allowed', opacity: '0.6'}}>
          <a href="#nav">Sign Up</a>
        </button>
      </div>
      <div className='shots__navbar-menu'>
        {toggleMenu  
        ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
        : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        }

        {toggleMenu && (
          <div className="shots__navbar-menu_container scale-up-center">
          <div className="shots__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#about">About Us</a></p>
            <p><a href="#services">Service</a></p>
            <p><a href="#solutions">Solutions</a></p>
            <p><a href="#blogs">Blogs</a></p>
            <p><a href="#learn">Learn</a></p>
          </div>
          <div className="shots__navbar-menu_container-links-sign">
            <p>
              <a href="#nav">Sign In</a>
            </p>
            <button type="button" style={{cursor: 'not-allowed', opacity: '0.6'}}>
              <a href="#nav">Sign Up</a>
            </button>
          </div>
        </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
