import React from 'react';
// import Logo from '../../assets/logo2.svg';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faWhatsapp, } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './footer.css';

const Footer = () => (
  <div className="footer section__padding">
    <div className="footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="footer-links">
      <div className="footer-links_logo">
        {/* <img src={Logo} alt="gpt3_logo"/> */}
        <h2 style={{color: 'white'}}>Shots <br />International <br />Technology</h2>
        <p><br />All Rights Reserved</p>
      </div>
      {/* Links */}
      <div className="footer-links_div">
        <h4>Links</h4>
        <a href="https://www.facebook.com/profile.php?id=100093118821048" target='_blank' rel='noreferrer' className='links'>
          <FontAwesomeIcon icon={faFacebook} beat /> &nbsp; Facebook
        </a>
        <a href="https://www.instagram.com/shotstechn/" target='_blank' rel='noreferrer' className='links' >
          <FontAwesomeIcon icon={faInstagram} beat /> &nbsp; Instagram
        </a>
        <a href="https://api.whatsapp.com/send/?phone=923254949444&text&type=phone_number&app_absent=0" target='_blank' rel='noreferrer' className='links'>
          <FontAwesomeIcon icon={faWhatsapp} beat /> &nbsp; WhatsApp
        </a>
      </div>
      {/* About Company */}
      <div className="footer-links_div">
        <h4 id='company'>Company</h4>
        <p className='company'>
          <a href="#company">Terms & Conditions</a>
        </p>
        <p className='company'>
          <a href="#company">Privacy Policy</a>
        </p>
        <p className='company'>
          <a href="#company">Contact</a>
        </p>
      </div>
      <div className="footer-links_div">
        <h4>Get in touch</h4>
        <p className='touch'>
          <FontAwesomeIcon icon={faLocationDot} />
          <a href="https://www.google.com/maps/dir/31.4301598,74.3330861/Shots+International+Technology/@31.4270787,74.3312456,16z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x391907a0dd85eaa3:0x63cd34d7ec1a107f!2m2!1d74.3364328!2d31.4230965?entry=ttu" rel='noreferrer' target='_blank'> &nbsp; Lahore, Pakistan, 54000</a>
        </p>
        <p className='touch'>
          <FontAwesomeIcon icon={faPhone} /> 
          <a href="tel:+923254949444">&nbsp;+92 325 4949 444</a>
        </p>
        <p className='touch'>
          <FontAwesomeIcon icon={faEnvelope} /> 
          <a href="mailto:info@shotstech.com"> &nbsp; info@shotstech.com</a>
        </p>
      </div>
    </div>

    <div className="footer-copyright">
      <p>Copyright &copy; 2021 - 2024 Shots International Technology</p>
    </div>
  </div>
);

export default Footer;
