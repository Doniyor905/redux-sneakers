import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filtersSlice';
import cart from './slices/cartSlice';
import favorite from './slices/favoriteSlice';
import sneakers from './slices/sneakersSlice';

export const store = configureStore({
  reducer: {
    filter,
    cart,
    favorite,
    sneakers,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
