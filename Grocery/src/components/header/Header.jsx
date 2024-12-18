import React from 'react';
import { Link } from 'react-router-dom'; 
import { FaShippingFast, FaHeadphones, FaLeaf, FaUndo } from 'react-icons/fa'; 
import './Header.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();  

  const handleShopNowClick = () => {
    navigate('/product');  
  };
  return (
    <>
      <div className="background-container">
        <div className="background-image">
          <div className="text-overlay">
            <h1>Treat Yourself</h1>
            <p>"Fill your cart with goodness, and make everything special in your life!".</p>
            <Link to="/">  
              <button onClick={handleShopNowClick} className="table">Shop Now</button>
            </Link>
          </div>
        </div>
      </div>
      <section className="benefits">
        <div className="benefit-item">
          <FaShippingFast className="icon" />
          <h3>Free Shipping</h3>
          <p>Enjoy free shipping on all orders, no minimum required!</p>
        </div>
        <div className="benefit-item">
          <FaHeadphones className="icon" />
          <h3>24/7 Availability</h3>
          <p>We are available round the clock to assist you with anything!</p>
        </div>
        <div className="benefit-item">
          <FaLeaf className="icon" />
          <h3>Fresh Products</h3>
          <p>Our products are sourced fresh, ensuring top quality for you!</p>
        </div>
        <div className="benefit-item">
          <FaUndo className="icon" />
          <h3>Return Policy</h3>
          <p>Hassle-free returns within 30 days for your peace of mind!</p>
        </div>
      </section>
    </>
  );
};

export default Header;
