import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/slices/userSlice";
import { addFavorite } from "../../redux/slices/favouritesSlice";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import "./Category.css";

// Import images
import i1 from '../../img/veg/onion.webp';
import i2 from '../../img/sweets/Atta-Ka-Sheera.jpg';
import i3 from '../../img/veg/tomato.webp';
import i4 from '../../img/veg/potato.webp';
import i5 from '../../img/veg/ladies finger.webp';
import i6 from '../../img/veg/brinjal.webp';
import i7 from '../../img/veg/capsicum.webp';
import i8 from '../../img/fruits/banana.webp';
import i9 from '../../img/veg/corn.webp';
import i10 from '../../img/veg/itter gourd.webp';
import i11 from '../../img/veg/ridge gourd.webp';
import i12 from '../../img/fruits/Anjeer.webp';
import i13 from '../../img/fruits/Apple.webp';
import i14 from '../../img/fruits/kiwi.webp';
import i15 from '../../img/fruits/musk melon.webp';
import i16 from '../../img/fruits/orange.webp';
import i17 from '../../img/fruits/pineapple.webp';
import i18 from '../../img/fruits/pomegranate.webp';
import i19 from '../../img/fruits/watermelon.webp';
import i20 from '../../img/nuts/cashew.webp';
import i0 from '../../img/nuts/almond.webp';
import i23 from '../../img/fruits/pappaya.webp';
import i24 from '../../img/fruits/Strawberry.webp';
import i25 from '../../img/sweets/soan appudi.jpg';
import i26 from '../../img/nuts/dates.webp';
import i27 from '../../img/nuts/pista.webp';
import i28 from '../../img/nuts/walnut.webp';
import i30 from '../../img/sweets/dry pean.jpg';
import i31 from '../../img/sweets/laddu.jpg';
import i32 from '../../img/sweets/palkova.jpg';
import i52 from '../../img/nuts/i1.webp';
import i33 from '../../img/nuts/i2.webp';
import i34 from '../../img/nuts/i3.webp';
import i35 from '../../img/nuts/i4.webp';
import i36 from '../../img/nuts/i5.webp';
import i37 from '../../img/nuts/i6.webp';
import i38 from '../../img/nuts/i7.jpg';
import i39 from '../../img/nuts/i8.jpg';
import i40 from '../../img/nuts/i9.jpg';
// import i41 from '../../img/nuts/c5.webp';


import c1 from '../../img/categories/All.png';
import c2 from '../../img/categories/veg.jpg';
import c3 from '../../img/categories/fruit.jpg';
import c4 from '../../img/categories/sweets.jpg';
import c5 from '../../img/categories/nuts.webp';
import c6 from '../../img/categories/snack.jpg';

const Category = () => {

  const dispatch = useDispatch();

  const categories = [
    { name: "All", image: c1 },
    { name: "Vegetables", image: c2 },
    { name: "Fruits", image: c3 },
    { name: "Sweets", image: c4 },
    { name: "Nuts", image: c5 },
    { name: "Snacks", image: c6 },
  ];

  // Items array
  const items = [
    { id: 1, image: i2, title: 'Atta Ka Sheera', price: 15.99, oldPrice: 20.99, category: 'sweets' },
    { id: 2, image: i1, title: 'Onion', price: 10.99, oldPrice: 14.99, category: 'vegetables' },
    { id: 3, image: i3, title: 'Tomato', price: 10.99, oldPrice: 14.99, category: 'vegetables' },
    { id: 4, image: i4, title: 'Potato', price: 10.99, oldPrice: 14.99, category: 'vegetables' },
    { id: 5, image: i5, title: 'ladies finger', price: 10.99, oldPrice: 14.99, category: 'vegetables' },
    { id: 6, image: i6, title: 'Brinjal', price: 10.99, oldPrice: 14.99, category: 'vegetables' },
    { id: 7, image: i7, title: 'Capsicum', price: 10.99, oldPrice: 14.99, category: 'vegetables' },
    { id: 8, image: i9, title: 'Corn', price: 10.99, oldPrice: 14.99, category: 'vegetables' },
    { id: 9, image: i10, title: 'Bitter Gourd', price: 10.99, oldPrice: 14.99, category: 'vegetables' },
    { id: 10, image: i11, title: 'Ridge Gourd', price: 10.99, oldPrice: 14.99, category: 'vegetables' },
    // { id: 2, image: '/img/veg/onion.webp', title: 'Onion', price: 10.99, oldPrice: 14.99, category: 'vegetables' },
    { id: 11, image: i8, title: 'Banana', price: 5.99, oldPrice: 7.99, category: 'fruits' },
    { id: 12, image: i12, title: 'Anjeer', price: 5.99, oldPrice: 7.99, category: 'fruits' },
    { id: 13, image: i13, title: 'Apple', price: 5.99, oldPrice: 7.99, category: 'fruits' },
    { id: 14, image: i14, title: 'kiwi', price: 5.99, oldPrice: 7.99, category: 'fruits' },
    { id: 15, image: i15, title: 'musk melon', price: 5.99, oldPrice: 7.99, category: 'fruits' },
    { id: 16, image: i16, title: 'orange', price: 5.99, oldPrice: 7.99, category: 'fruits' },
    // { id: 50, image: i50, title: 'Gulab jamun', price: 5.99, oldPrice: 7.99, category: 'fruits' },
    { id: 18, image: i17, title: 'pineapple', price: 5.99, oldPrice: 7.99, category: 'fruits' },
    { id: 19, image: i18, title: 'pomegranate', price: 5.99, oldPrice: 7.99, category: 'fruits' },
    { id: 20, image: i19, title: 'water melon', price: 5.99, oldPrice: 7.99, category: 'fruits' },
    { id: 23, image: i20, title: 'Cashew', price: 20.99, oldPrice: 25.99, category: 'nuts' },
    { id: 100, image: i0, title: 'almond', price: 20.99, oldPrice: 25.99, category: 'nuts' },
    { id: 24, image: i25, title: 'Soan pappudi', price: 20.99, oldPrice: 25.99, category: 'sweets' },
    { id: 25, image: i26, title: 'dates', price: 20.99, oldPrice: 25.99, category: 'nuts' },
    { id: 26, image: i27, title: 'pista', price: 20.99, oldPrice: 25.99, category: 'nuts' },
    { id: 27, image: i28, title: 'walnut', price: 20.99, oldPrice: 25.99, category: 'nuts' },
 
    // { id: 51, image: i51, title: 'Kaju Jalebi', price: 18.99, oldPrice: 22.99, category: 'sweets' },
    { id: 29, image: i30, title: 'Dry pean', price: 18.99, oldPrice: 22.99, category: 'sweets' },
    { id: 30, image: i31, title: 'Laddu', price: 18.99, oldPrice: 22.99, category: 'sweets' },
    { id: 31, image: i32, title: 'palkova', price: 18.99, oldPrice: 22.99, category: 'sweets' },
    { id: 32, image: i24, title: 'Strawberry', price: 18.99, oldPrice: 22.99, category: 'fruits' },
    { id: 33, image: i23, title: 'pappaya', price: 18.99, oldPrice: 22.99, category: 'fruits' },
    { id: 34, image: i52, title: 'Kur Kur', price: 18.99, oldPrice: 22.99, category: 'snacks' },
    { id: 35, image: i33, title: 'Mixture', price: 18.99, oldPrice: 22.99, category: 'snacks' },
    { id: 36, image: i34, title: 'dark Fantastic', price: 18.99, oldPrice: 22.99, category: 'snacks' },
    { id: 38, image: i35, title: 'Nutric cjoice', price: 18.99, oldPrice: 22.99, category: 'snacks' },
    { id: 37, image: i36, title: 'Orea Fanastc', price: 18.99, oldPrice: 22.99, category: 'snacks' },
    { id: 39, image: i37, title: 'Jim Jam', price: 18.99, oldPrice: 22.99, category: 'snacks' },
    { id: 40, image: i38, title: 'potato chips', price: 18.99, oldPrice: 22.99, category: 'snacks' },
    { id: 41, image: i39, title: 'samosa', price: 18.99, oldPrice: 22.99, category: 'snacks' },
    { id: 42, image: i40, title: 'roll', price: 18.99, oldPrice: 22.99, category: 'snacks' },
    
  ];
 
  const [selectedCategory, setSelectedCategory] = useState("All");


  const handleCategoryClick = (category) => {
    setSelectedCategory(category.name);
  };

  const filteredItems =
    selectedCategory === "All"
      ? items
      : items.filter((item) => item.category === selectedCategory.toLowerCase());

  return (
    <div className="app-container">

      <div className="categories">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`category ${selectedCategory === category.name ? "active" : ""}`}
            onClick={() => handleCategoryClick(category)}
          >
            <img src={category.image} alt={category.name} />
            <p>{category.name}</p>
          </div>
        ))}
      </div>


      <div className="items">
        {filteredItems.map((item) => (
          <div key={item.id} className="item">
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
            <p className="price">
              <span>${item.price}</span> <del>${item.oldPrice}</del>
            </p>
            <div className="button-group">
              <button onClick={() => dispatch(addItem(item))}>
                <FaShoppingCart /> 
              </button>
              <button onClick={() => dispatch(addFavorite(item))}>
                <FaHeart />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;