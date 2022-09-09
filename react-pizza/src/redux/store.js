import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice';

export const store = configureStore({ //в store хранится вся логика связанная с Redux Toolkit
  reducer: {
    filter, 
  }, 
});

console.log(store);