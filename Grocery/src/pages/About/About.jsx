import React from 'react';
import './About.css';
import aboutImage from '../../img/About/gal.jpg'; 
// import Slider from '../slider/Slider';

const About = () => {
  return (
    <>
    <div className="about-container">
      <div className="about-text">
        <h1>About Us</h1>
        <p>
          Welcome to our platform! We are dedicated to providing you with the best 
          products and services. Our mission is to bring quality and innovation 
          to your life. Explore our wide range of offerings, crafted with care 
          and designed to make a difference.
        </p>
        <button className="learn-more-btn">Learn More</button>
      </div>
      <div className="about-image">
        <img src={aboutImage} alt="About Us" className="responsive-image" />
      </div>
    </div>
    </>
  );
};

export default About;
