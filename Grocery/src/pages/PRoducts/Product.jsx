import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, incrementQuantity, decrementQuantity } from "../../redux/slices/userSlice"; 
import { addFavorite } from "../../redux/slices/favouritesSlice";
import { FaHeart } from 'react-icons/fa'; 

import "./Product.css";
import i1 from '../../img/fruits/orange.webp';
import i2 from '../../img/fruits/pineapple.webp';
import i3 from '../../img/fruits/banana.webp';
import i4 from '../../img/fruits/pappaya.webp';
import i5 from '../../img/veg/tomato.webp';
import i6 from '../../img/veg/brinjal.webp';
import i7 from '../../img/veg/capsicum.webp';
import i8 from '../../img/veg/corn.webp';
import i9 from '../../img/nuts/cashew.webp';
import i10 from '../../img/nuts/almond.webp';
import i11 from '../../img/nuts/dates.webp';
import i12 from '../../img/nuts/c2.webp';
import Newsletter from "../Newsletter/News";
import Header from "../../components/header/Header";
import About from "../About/About";

const items = [
  { id: 1, image: i1, title: "Orange", price: 16, oldPrice: 20 },
  { id: 2, image: i2, title: "PineApple", price: 19, oldPrice: 20.59 },
  { id: 3, image: i3, title: "Banana", price: 11, oldPrice: 15.95 },
  { id: 4, image: i4, title: "Papaya", price: 13, oldPrice: 20.39 },
  { id: 5, image: i5, title: "Tomato", price: 22, oldPrice: 26.65 },
  { id: 6, image: i6, title: "Brinjal", price: 15, oldPrice: 16.93 },
  { id: 7, image: i7, title: "Capsicum", price: 29, oldPrice: 34.19 },
  { id: 8, image: i8, title: "Corn", price: 12, oldPrice: 17.21 },
  { id: 9, image: i9, title: "Cashew", price: 29, oldPrice: 31.09 },
  { id: 10, image: i10, title: "Almond", price: 25.99, oldPrice: 27.99 },
  { id: 11, image: i11, title: "Dates", price: 18.99, oldPrice: 20.99 },
  { id: 12, image: i12, title: "Pistachio", price: 25.99, oldPrice: 30.9 },
];

const Product = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);
  const [addedToCart, setAddedToCart] = useState({});

  const handleAddToCart = (item) => {
    dispatch(addItem(item));
    setAddedToCart(prev => ({ ...prev, [item.id]: true }));
  };

  const handleAddToFavorites = (item) => {
    dispatch(addFavorite(item)); 
  };

  const handleIncrement = (item) => {
    dispatch(incrementQuantity(item.id));
  };

  const handleDecrement = (item) => {
    dispatch(decrementQuantity(item.id));
  };

  return (
    <>
      <Header />
      <About />
      
      <section className="featured" id="featured">
        <h1 className="heading">
          <span>Featured Items</span>
        </h1>
        <div className="product-grid">
          {items.map((item) => {
            const inCart = cartItems.find(cartItem => cartItem.id === item.id);
            const quantity = inCart ? inCart.quantity : 0;

            return (
              <div key={item.id} className="product-item">
                <div className="image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="content">
                  <h3>{item.title}</h3>
                  <div className="price">
                    ${item.price} <span>${item.oldPrice}</span>
                  </div>
                  {!addedToCart[item.id] ? (
                    <button className="btn" onClick={() => handleAddToCart(item)}>
                      Add to Cart
                    </button>
                  ) : (
                    <div className="quantity-controls">
                      <button onClick={() => handleDecrement(item)}>-</button>
                      <span>{quantity}</span>
                      <button onClick={() => handleIncrement(item)}>+</button>
                    </div>
                  )}
                  <button className="btn-icon" onClick={() => handleAddToFavorites(item)}>
                    <FaHeart /> 
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <Newsletter />
    </>
  );
};

export default Product;
