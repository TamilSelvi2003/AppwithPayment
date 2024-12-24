import React from 'react';
import './SingleProduct.css';
import { addItem } from "../../redux/slices/userSlice";
import { addFavorite } from "../../redux/slices/favouritesSlice";
import { useLocation } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { FaShoppingCart, FaHeart } from "react-icons/fa";

const SingleProduct = () => {
    const dispatch = useDispatch();
    // const cartItems = useSelector((state) => state.cart.items);

    const location = useLocation();
    const { image, Title, price, id } = location.state || {};

    const handleAddToCart = () => {
        const item = { 
            id, 
            Title, 
            price, 
            image 
        };
        dispatch(addItem(item));
    };
    
    

    const handleAddToFavorites = () => {
        const item = { id, Title, price, image };
        dispatch(addFavorite(item));
    };

    return (
        <div className="single-product-container">
            <div className="single-product-image">
                <img src={image} alt={Title} className="single-product-img" />
            </div>
            <div className="single-product-details">
                <h2>{Title}</h2>
                <p>${price}</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus Dolore dolorum voluptates nesciunt vel maxime hic, facere soluta id sint odio earum ducimus perspiciatis.</p>
                <div className="buttons">
                    <button onClick={handleAddToCart} className="add-to-cart-btn">
                        <FaShoppingCart />
                    </button>
                    <button onClick={handleAddToFavorites} className="add-to-fav-btn">
                        <FaHeart />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;