import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'; 
import Product from './pages/PRoducts/Product'; 
import Cart from './components/Cart/Cart'; 
import Favourites from './components/Favourites/Favourites';
import About from './pages/About/About'; 
import Category from './components/category/Category';
import Slider from './pages/slider/Slider';
import SingleProduct from './pages/single/SingleProduct';
import Footer from './components/Footer/Footer';
import PaymentRoute from './components/routes/PaymentRoute'; 
import { Elements } from '@stripe/react-stripe-js';  // Import Elements provider
import { loadStripe } from '@stripe/stripe-js';  // Import loadStripe function
import './App.css';

// Initialize Stripe with your public key (replace with your actual key)
const stripePromise = loadStripe('pk_test_51QWuxERuEnnwd1rf6ADGoT15NF4dcpnIjma6afFW18I3ouzyPa5cn2IEw4fCpLoSQD4H72JVFSMI6wyqG3bwJTIa00Uh7A2ibL');

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Product />} /> 
            <Route path="/about" element={<About />} /> 
            <Route path="/cart" element={<Cart />} /> 
            <Route path="/category" element={<Category />} />
            <Route path="/category/:name" element={<Category />} />
            <Route path="/favorites" element={<Favourites />} /> 
            <Route path="/slider" element={<Slider />} /> 
            <Route path="/singleproduct" element={<SingleProduct />} /> 

            {/* Wrap PaymentRoute with Elements provider */}
            <Route 
              path="/payment" 
              element={
                <Elements stripe={stripePromise}>  {/* Wrapping with Elements */}
                  <PaymentRoute />
                </Elements>
              } 
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
