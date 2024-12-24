import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeItem, decrementQuantity, incrementQuantity } from "../../redux/slices/userSlice";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './Cart.css';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };

  const handleProceedToPayment = () => {
    navigate("/payment");
  };

  return (
    <div className="cart">
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="cart-text">
          Your cart is empty <br />
          <Link to="/category">
            <button className="cart-continue">Continue Shopping</button>
          </Link>
        </p>
      ) : (
        <div className="cart-container">
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} className="cart-item-image" />
                <div className="item-info">
                  <h3>{item.title}</h3>
                  <p>Price: ${item.price}</p>
                  <div className="quantity-controls">
                    <button onClick={() => handleDecrement(item.id)} className="decrement-button">-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleIncrement(item.id)} className="increment-button">+</button>
                  </div>
                  <button 
                    onClick={() => handleRemoveItem(item.id)} 
                    className="remove-button"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
            <button onClick={handleProceedToPayment}>Proceed to payment</button>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default Cart;
