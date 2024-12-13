import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    favoriteItems: [],
  },
  reducers: {
    setFavoriteItems(state, action) {
      const findItem = state.favoriteItems.find((item) => item.id === action.payload.id);
      if (findItem) {
        state.favoriteItems = state.favoriteItems.filter((item) => item.id !== findItem.id);
      } else {
        state.favoriteItems.push(action.payload);
      }
    },
  },
});

export const { setFavoriteItems } = favoriteSlice.actions;
export default favoriteSlice.reducer;
