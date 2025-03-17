import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Payment.css";

const PaymentRoute = () => {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.items); 
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const [loading, setLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    setLoading(true);

    try {
      const response = await fetch("https://appwithpayment-backend.onrender.com/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: totalPrice * 100 }),
      });

      const { clientSecret, error } = await response.json();

      if (error) {
        toast.error(error.message);
        setLoading(false);
        return;
      }

      const cardElement = elements.getElement(CardElement);

      const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
        },
      });

      if (confirmError) {
        toast.error(confirmError.message);
      } else if (paymentIntent.status === "succeeded") {
        toast.success("Payment successful!");
        dispatch({ type: "cart/clearCart" }); // Clear cart after successful payment
        setPaymentSuccess(true); 
      } else {
        toast.error("Payment failed!");
      }
    } catch (err) {
      toast.error("Payment failed!");
    } finally {
      setLoading(false);
    }
  };

  const handleDoneClick = () => {
    navigate("/");
  };

  return (
    <div className="payment-route">
      {paymentSuccess ? (
        <div className="payment-success">
          <h2>Thank you for your order!</h2>
          <button onClick={handleDoneClick}>Done</button>
        </div>
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            <h3>Payment Information</h3>
            <CardElement />
            <button type="submit" disabled={!stripe || loading}>
              {loading ? "Processing..." : `Pay $${totalPrice.toFixed(2)}`}
            </button>
          </form>
        </>
      )}
      <ToastContainer />
    </div>
  );
};

export default PaymentRoute;
