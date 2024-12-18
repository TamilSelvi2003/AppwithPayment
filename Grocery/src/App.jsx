import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'; 
import Product from './pages/PRoducts/Product'; 
// import CategoryPage from './components/category/Category';
import Cart from './components/Cart/Cart'; 
import Favourites from './components/Favourites/Favourites'
import About from './pages/About/About'; 
// import All from './components/All/All';
import Footer from './components/Footer/Footer'; 
import './App.css'; 
import Category from './components/category/Category';
import Slider from './pages/slider/Slider';
import SingleProduct from './pages/single/SingleProduct';

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
          </Routes>
        </div>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;
