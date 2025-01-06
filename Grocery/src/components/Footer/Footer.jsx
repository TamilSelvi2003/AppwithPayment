import React from "react";
import './Footer.css'; 

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h4>About Us</h4>
          <p className="foot">We provide the best meal service with freshly prepared dishes delivered right to your doorstep.</p>
        </div>
        <div className="footer-links">
          <h4>All Categories</h4>
          <ul>
            <li><a href="#">Vegetables</a></li>
            <li><a href="#">Fruits</a></li>
            <li><a href="#">Nuts</a></li>
            <li><a href="#">sweets&cookies</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <h4>Connect with Us</h4>
          <ul>
            <li><a href="#" aria-label="Facebook"><FaFacebook size={30} /></a></li>
            <li><a href="#" aria-label="Twitter"><FaTwitter size={30} /></a></li>
            <li><a href="#" aria-label="Instagram"><FaInstagram size={30} /></a></li>
            <li><a href="#" aria-label="LinkedIn"><FaLinkedin size={30} /></a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
