import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { addItem } from "../../redux/slices/userSlice";
import { addFavorite } from "../../redux/slices/favouritesSlice";
import "./Category.css";
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
import i90 from '../../img/veg/ad.jpg';
import i92 from '../../img/veg/beet.jpg';
import i93 from '../../img/veg/carrot.jpg';
import i94 from '../../img/fruits/jack.jpg';
import i95 from '../../img/fruits/custard.jpg';
import i96 from '../../img/fruits/star.jpg';
import i97 from '../../img/sweets/modak.jpg';
import i98 from '../../img/sweets/swasthi.webp';
import i99 from '../../img/nuts/hazel.jpg';
import i91 from '../../img/nuts/wal.jpg';
import i100 from '../../img/nuts/pea.jpg';

// Category images
import c1 from '../../img/categories/All.png';
import c2 from '../../img/categories/veg.jpg';
import c3 from '../../img/categories/fruit.jpg';
import c4 from '../../img/categories/sweets.jpg';
import c5 from '../../img/categories/nuts.webp';
import c6 from '../../img/categories/snack.jpg';

const Category = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  const categories = [
    { name: "All", image: c1 },
    { name: "Vegetables", image: c2 },
    { name: "Fruits", image: c3 },
    { name: "Sweets", image: c4 },
    { name: "Nuts", image: c5 },
    { name: "Snacks", image: c6 },
  ];

  const items = [
    { id: 1, image: i2, title: 'Atta Ka Sheera', price: 15, oldPrice: 20.99, category: 'sweets' },
    { id: 2, image: i1, title: 'Onion', price: 21, oldPrice: 34.99, category: 'vegetables' },
    { id: 3, image: i3, title: 'Tomato', price: 19, oldPrice: 24.99, category: 'vegetables' },
    { id: 4, image: i4, title: 'Potato', price: 9, oldPrice: 14.99, category: 'vegetables' },
    { id: 5, image: i5, title: 'Ladies Finger', price: 13, oldPrice: 14.99, category: 'vegetables' },
    { id: 6, image: i6, title: 'Brinjal', price: 16, oldPrice: 20.99, category: 'vegetables' },
    { id: 7, image: i7, title: 'Capsicum', price: 10, oldPrice: 14.99, category: 'vegetables' },
    { id: 8, image: i9, title: 'Corn', price: 13, oldPrice: 15.99, category: 'vegetables' },
    { id: 9, image: i10, title: 'Bitter Gourd', price: 16, oldPrice: 16, category: 'vegetables' },
    { id: 10, image: i11, title: 'Ridge Gourd', price: 10, oldPrice: 14.99, category: 'vegetables' },
    { id: 11, image: i8, title: 'Banana', price: 5, oldPrice: 7.9, category: 'fruits' },
    { id: 12, image: i12, title: 'Anjeer', price: 9, oldPrice: 10, category: 'fruits' },
    { id: 13, image: i13, title: 'Apple', price: 9, oldPrice: 12, category: 'fruits' },
    { id: 14, image: i14, title: 'Kiwi', price: 20, oldPrice: 29, category: 'fruits' },
    { id: 15, image: i15, title: 'Musk Melon', price: 19, oldPrice: 27, category: 'fruits' },
    { id: 16, image: i16, title: 'Orange', price: 10, oldPrice: 14, category: 'fruits' },
    { id: 17, image: i17, title: 'Pineapple', price: 13, oldPrice: 19, category: 'fruits' },
    { id: 18, image: i18, title: 'Pomegranate', price: 18, oldPrice: 21, category: 'fruits' },
    { id: 19, image: i19, title: 'Watermelon', price: 14, oldPrice: 17, category: 'fruits' },
    { id: 20, image: i20, title: 'Cashew', price: 23, oldPrice: 25, category: 'nuts' },
    // { id: 21, image: i0, title: 'Almond', price: 20, oldPrice: 25, category: 'nuts' },
    { id: 22, image: i23, title: 'Papaya', price: 10, oldPrice: 20, category: 'fruits' },
    { id: 23, image: i24, title: 'Strawberry', price: 29, oldPrice: 22.99, category: 'fruits' },
    { id: 100, image: i0, title: 'almond', price: 20, oldPrice: 25, category: 'nuts' },
    { id: 24, image: i25, title: 'Soan pappudi', price: 17, oldPrice: 20, category: 'sweets' },
    { id: 25, image: i26, title: 'dates', price: 21, oldPrice: 30, category: 'nuts' },
    { id: 26, image: i27, title: 'pista', price: 24, oldPrice: 25, category: 'nuts' },
    { id: 27, image: i28, title: 'walnut', price: 25, oldPrice: 29, category: 'nuts' },
    { id: 29, image: i30, title: 'Dry pean', price: 18, oldPrice: 20.99, category: 'sweets' },
    { id: 30, image: i31, title: 'Laddu', price: 14, oldPrice: 17, category: 'sweets' },
    { id: 31, image: i32, title: 'palkova', price: 19, oldPrice: 22, category: 'sweets' },
     { id: 34, image: i52, title: 'Kur Kur', price: 13, oldPrice: 16, category: 'snacks' },
    { id: 35, image: i33, title: 'Mixture', price: 18, oldPrice: 21, category: 'snacks' },
    { id: 36, image: i34, title: 'dark Fantastic', price: 19, oldPrice: 26, category: 'snacks' },
    { id: 38, image: i35, title: 'Nutric cjoice', price: 18, oldPrice: 22.9, category: 'snacks' },
    { id: 37, image: i36, title: 'Orea Fanastc', price: 23, oldPrice: 19, category: 'snacks' },
    { id: 39, image: i37, title: 'Jim Jam', price: 18, oldPrice: 22, category: 'snacks' },
    { id: 40, image: i38, title: 'potato chips', price: 14, oldPrice: 25, category: 'snacks' },
    { id: 41, image: i39, title: 'samosa', price: 10, oldPrice: 18, category: 'snacks' },
    { id: 42, image: i40, title: 'potato roll', price: 11, oldPrice: 12.9, category: 'snacks' },
    { id: 43, image: i90, title: 'Raddish', price: 11, oldPrice: 12.9, category: 'vegetables' },
    { id: 44, image: i91, title: 'walnut', price: 11, oldPrice: 12.9, category: 'nuts' },
    { id: 45, image: i92, title: 'Beetroot', price: 11, oldPrice: 12.9, category: 'vegetables' },
    { id: 46, image: i93, title: 'Carrot', price: 11, oldPrice: 12.9, category: 'vegetables' },
    { id: 47, image: i94, title: 'Jackfruit', price: 11, oldPrice: 12.9, category: 'fruits' },
    { id: 48, image: i95, title: 'Custard Apple', price: 11, oldPrice: 12.9, category: 'fruits' },
    { id: 49, image: i96, title: 'Star fruit', price: 11, oldPrice: 12.9, category: 'fruits' },
    { id: 50, image: i97, title: 'modak', price: 11, oldPrice: 12.9, category: 'sweets' },
    { id: 51, image: i98, title: 'swasthi', price: 11, oldPrice: 12.9, category: 'sweets' },
    { id: 52, image: i99, title: 'HazelNuts', price: 11, oldPrice: 12.9, category: 'muts' },
    { id: 53, image: i100, title: 'Peanuts', price: 11, oldPrice: 12.9, category: 'nuts' },
 
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category.name);
  };

  const filteredItems =
    selectedCategory === "All"
      ? items
      : items.filter((item) => item.category.toLowerCase() === selectedCategory.toLowerCase());

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
  {filteredItems.length > 0 ? (
    filteredItems.map((item) => (
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
    ))
  ) : (
    <p>No items available in this category.</p>
  )}
</div>

      <ul className="admins">
                {products.map((product) => (
                    <li key={product.id}>
                        <img src={product.imageUrl} alt={product.name} width="50" />
                        <h3>{product.name}</h3>
                        <p> ${product.price}</p>
                        {/* <p> {product.category}</p> */}
                      <div className="admin-btn">
                        <button className="car" onClick={() => dispatch(addItem(product))} >  <FaShoppingCart /></button>
                        <button className="hat" onClick={() => dispatch(addFavorite(product))}> <FaHeart /></button>
                      </div>
                    </li>
                ))}
            </ul>
    </div>
  );
};

export default Category;


