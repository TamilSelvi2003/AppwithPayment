import React,{useState} from 'react';
import { useSelector } from 'react-redux'; 
import { Link, NavLink ,useNavigate} from 'react-router-dom';  
import { FaShoppingCart, FaHeart, FaUserCircle ,FaSearch} from 'react-icons/fa'; 
import './Navbar.css';
import logo from '../../../src/logo.jpg';

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.length; 

  const favoriteItems = useSelector((state) => state.favorites.items);
  const favoriteCount = favoriteItems.length; 
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate(); 

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = () => {
    if (searchTerm.trim()) {
      navigate(`/category?search=${searchTerm}`);
    }
  };


  return (
    <div className="navbar">
      <div className="navbar__left">
        <Link to="/">
          <img src={logo} alt="Logo" className="navbar__logo" />
        </Link>
      </div>
      
      <div className="navbar__center">
        <ul className="navbar__links">
          <li>
            <NavLink 
              to="/" 
              exact
              activeClassName="active"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              activeClassName="active"
            >
              About
            </NavLink>


          </li>
          <li className="dropdown">
            <NavLink 
              to="/category" 
              activeClassName="active"
            >
              Category
            </NavLink>
            <ul className="dropdown-menu">
              <li><NavLink to="/category/vegetables" activeClassName="active">Vegetables</NavLink></li>
              <li><NavLink to="/category/fruits" activeClassName="active">Fruits</NavLink></li>
              <li><NavLink to="/category/nuts" activeClassName="active">Nuts</NavLink></li>
              <li><NavLink to="/category/sweets-cookies" activeClassName="active">Sweets & Cookies</NavLink></li>
            </ul>
          </li>
          <li><Link to="#offers" activeClassName="active">Offers</Link></li>
          <li><Link to="#contact" activeClassName="active">Contact</Link></li>
        </ul>
      </div>

      <li className="navbar__search" >
  <div className="navbar__searchWrapper">
    <input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={handleSearchChange}
      className="navbar__searchInput"
    />
    <button className="navbar__searchButton" onClick={handleSearchSubmit}>Search</button>
  </div>
</li>


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
        <Link to="/signin">
          <div className="navbar__icon">
            <FaUserCircle className="user-icon" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
