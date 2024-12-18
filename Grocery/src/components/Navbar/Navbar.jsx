import React from 'react';
import { useSelector } from 'react-redux'; 
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import './Navbar.css';
import logo from '../../../src/logo.jpg'
// import Header from '../header/Header';

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.length; 

  const favoriteItems = useSelector((state) => state.favorites.items);
  const favoriteCount = favoriteItems.length; 

  return (
    <>
      <div className="navbar">
        <div className="navbar__left">
        <Link to="/">
        <img src={logo} alt="Logo" className="navbar__logo" />
        </Link>
       
        </div>
        <div className="navbar__center">
          <ul className="navbar__links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li className="dropdown">
              <Link to="/category">Category</Link>
              <ul className="dropdown-menu">
                <li><Link to="/category/vegetables">Vegetables</Link></li>
                <li><Link to="/category/fruits">Fruits</Link></li>
                <li><Link to="/category/nuts">Nuts</Link></li>
                <li><Link to="/category/sweets-cookies">Sweets & Cookies</Link></li>
              </ul>
            </li>
            <li><Link to="#offers">Offers</Link></li>
            <li><Link to="#contact">Contact</Link></li>
          </ul>
        </div>
        <div className="navbar__right">
          <Link to="/cart">
            <div className="navbar__icon">
              <FaShoppingCart />
              <span className="navbar__count">{cartCount}</span>
            </div>
          </Link>
          <Link to="/favorites">
            <div className="navbar__icon">
              <FaHeart />
              <span className="navbar__count">{favoriteCount}</span>
            </div>
          </Link>
        </div>
      </div>
     
    </>
  );
};

export default Navbar;
