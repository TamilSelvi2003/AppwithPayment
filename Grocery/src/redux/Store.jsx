 import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/userSlice';
import favoritesReducer from './slices/favouritesSlice'; 
import productReducer from './slices/ProductSlice'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorites: favoritesReducer,
    products: productReducer, 
  },
});

export default store;
