import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/slices/ProductSlice";
import './Admin.css';
import {  useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const [product, setProduct] = useState({
    id: "",
    name: "",
    price: "",
    oldPrice: "",
    category: "",
    imageUrl: ""
  });
  const [showForm, setShowForm] = useState(true); 

  const dispatch = useDispatch();
  const Navigate = useNavigate()

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleAddProduct = () => {
    if (product.name && product.price && product.category && product.imageUrl) {
      dispatch(addProduct({ ...product, id: Date.now() }));
      setProduct({ id: "", name: "", price: "", oldPrice: "", category: "", imageUrl: "" });
      alert("Product added successfully!");
    } else {
      alert("Please fill all fields.");
    }
  };

  const handleClick = () => {
    setShowForm(false); 
    Navigate("/signin")
  };

  return (
    <div className="admin-container">
      {showForm && (  
        <>
          <h2 className="admin-head">Admin Panel</h2>
          <button className="close" onClick={handleClick}>X</button>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleInputChange}
            placeholder="Product Name"
          />
          <input
            type="text"
            name="price"
            value={product.price}
            onChange={handleInputChange}
            placeholder="Price"
          />
          <input
            type="text"
            name="oldPrice"
            value={product.oldPrice}
            onChange={handleInputChange}
            placeholder="Old Price"
          />
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleInputChange}
            placeholder="Category"
          />
          <input
            type="text"
            name="imageUrl"
            value={product.imageUrl}
            onChange={handleInputChange}
            placeholder="Image URL"
          />
          <button className="btn-admin" onClick={handleAddProduct}>Add Product</button>
        </>
      )}
    </div>
  );
};

export default AdminPanel;
