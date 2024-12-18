import React from "react";
import './Footer.css';  // Make sure to import the CSS for styling

// Importing social media icons from react-icons
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-about">
          <h4>About Us</h4>
          <p>We provide the best meal service with freshly prepared dishes delivered right to your doorstep.</p>
        </div>

        {/* Quick Links Section */}
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

        {/* Social Media Icons Section */}
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
