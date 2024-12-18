import React from 'react';
import './News.css';
import Slider from '../slider/Slider';

const Newsletter = () => {
  return (
   <>
    <div className="newsletter-container">
      <div className="newsletter-content">
        <h2>Stay Updated!</h2>
        <p>
          Subscribe to our newsletter and get the latest updates on fresh produce, exclusive discounts, and special offers delivered right to your inbox!
        </p>
        <div className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email address"
            className="newsletter-input"
          />
          <button className="subscribe-btn">Subscribe</button>
        </div>
      </div>
    </div>
    <Slider/>
   </>
  );
};

export default Newsletter;
