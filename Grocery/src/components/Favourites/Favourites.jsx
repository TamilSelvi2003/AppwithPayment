import React from 'react';
import './Favourites.css'
import { useSelector, useDispatch } from 'react-redux';
import { FaTrash } from 'react-icons/fa';
import { addItem } from '../../redux/slices/userSlice';  
import { removeFavorite } from '../../redux/slices/favouritesSlice';

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites.items); 
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addItem(item)); 
  };

  const handleRemoveFavorite = (id) => {
    dispatch(removeFavorite(id)); 
  };

  return (
    <section className="favorites">
      <h1>Your Favorites</h1>
      <div className="favorites-grid">
        {favorites.map((item) => (
          <div key={item.id} className="favorites-item">
            <div className="image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="content">
              <h3>{item.title}</h3>
              <div className="price">${item.price}</div>
              <button className="btn" onClick={() => handleAddToCart(item)}>
                Add to Cart
              </button>
              <button className="btn-remove" onClick={() => handleRemoveFavorite(item.id)}>
                <FaTrash /> Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Favorites;
