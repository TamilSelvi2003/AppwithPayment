// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/userSlice';
import favoritesReducer from './slices/favouritesSlice'; // Import favorites slice

const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorites: favoritesReducer, // Add favorites reducer
  },
});

export default store;
