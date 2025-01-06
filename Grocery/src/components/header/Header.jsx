import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import { FaShippingFast, FaHeadphones, FaLeaf, FaUndo } from 'react-icons/fa'; 
import './Header.css';
import { useNavigate } from 'react-router-dom';
import s1 from '../../img/bgc.jpg';
import s3 from '../../img/bb3.jpg';
import s4 from '../../img/snack.jpg'
import s5 from '../../img/bb4.avif'

const Header = () => {
  const navigate = useNavigate();
  
  const images = [s1, s3,s4,s5];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleShopNowClick = () => {
    navigate('/product');
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); 
    
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <>
      <div className="background-container">
        <div className="background-image">
          <img src={images[currentImageIndex]} alt="Slider" />
          <div className="text-overlay">
            <h1>Treat Yourself</h1>
            <p>Start your healthy journey with us, filled with nature.</p>
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