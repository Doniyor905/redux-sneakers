import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchFavorites = createAsyncThunk(
  'favorite/fetchFavorites',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`https://12c37b99b44f3ed5.mokky.dev/favorites`);
      return data;
    } catch (error) {
      return rejectWithValue(error.data.messsage);
    }
  },
);

export const addToFavorites = createAsyncThunk(
  'favorite/addToFavorites',
  async (obj, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`https://12c37b99b44f3ed5.mokky.dev/favorites`, obj);
      return data;
    } catch (error) {
      return rejectWithValue(error.data.message);
    }
  },
);

export const deleteFavorite = createAsyncThunk(
  'favorite/deleteFavorite',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`https://12c37b99b44f3ed5.mokky.dev/favorites/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.data.message);
    }
  },
);

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    favoriteItems: [],
    status: '',
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

  extraReducers: (builder) => {
    builder
      .addCase(fetchFavorites.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.status = 'success';
        state.favoriteItems = action.payload;
      })
      .addCase(addToFavorites.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(addToFavorites.fulfilled, (state, action) => {
        state.status = 'success';
        state.favoriteItems.push(action.payload);
      })
      .addCase(deleteFavorite.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(deleteFavorite.fulfilled, (state, action) => {
        state.status = 'success';
        state.favoriteItems = state.favoriteItems.filter((item) => item.id !== action.payload);
      });
  },
});

export const { setFavoriteItems } = favoriteSlice.actions;
export default favoriteSlice.reducer;
