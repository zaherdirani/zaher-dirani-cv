import React from "react";
import saharImage from "../../images/sahar.jpeg";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import './intro-container.css';

const IntroContainer = () => {
  return (
    <div className="home-container">
      <div className="content">
        <div className="left-content">
          <h1 className="h1-intro">Hi, I am Zaher Dirani</h1>
          <h1 className="animation">Sales Account Manager.</h1>
          <p>Over 20 years of Strong knowledge on Technical, Professional support, Business Development, Pre-Sales, and Sales e2e.
            <br /><br />I am currently a Sales Account Manager at SOTI.net. 
            SOTI is a proven leader at creating innovative solutions that reduce the cost and complexity of business-critical mobility and the IoT. Thousands of companies around the world depend on us to secure, manage and support their mobile operations.
          </p>
          <h1>Customer is #1! It's always about end user perception.</h1>
          
        </div>
        <div className="right-content">
          <img src="https://media.licdn.com/dms/image/D4D03AQHN0elUCqdxNA/profile-displayphoto-shrink_400_400/0/1718648449086?e=1726099200&v=beta&t=LqYHXIgXtpD0znqlhRmWe2KHJR18YLV_OLgpvLa6y9c" alt="Profile" className="profile-pic" />
          <div className="social-media">
            <a href="https://www.linkedin.com/in/zaherdirani/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="icon" />
            </a>
            <a href="https://www.facebook.com/zaher.dirani.5?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="icon" />
            </a>
          </div>
          <p>Undertsand to be undertood.</p>
        </div>
      </div>
    </div>
  );
};

export default IntroContainer;