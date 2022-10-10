import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice';
import cart from './slices/cartSlice';

export const store = configureStore({ //в store хранится вся логика связанная с Redux Toolkit
  reducer: {
    filter,
    cart, 
  }, 
});

console.log(store);