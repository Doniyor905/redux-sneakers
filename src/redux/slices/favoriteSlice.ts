import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

type FavoriteItems = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
};

type Items = {
  favoriteItems: FavoriteItems[];
  status: string;
};

export const fetchFavorites = createAsyncThunk<FavoriteItems[], void, { rejectValue: string }>(
  'favorite/fetchFavorites',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`https://12c37b99b44f3ed5.mokky.dev/favorites`);
      return data;
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>;
      if (axiosError.response) {
        return rejectWithValue(axiosError.response.data.message);
      }
      return rejectWithValue('Неизвестная ошибка');
    }
  },
);

const initialState: Items = {
  favoriteItems: [],
  status: '',
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    setFavoriteItems(state, action: PayloadAction<FavoriteItems>) {
      const findItem = state.favoriteItems.find((item) => item.id === action.payload.id);
      if (findItem) {
        state.favoriteItems = state.favoriteItems.filter((item) => item.id !== findItem.id);
      } else {
        state.favoriteItems.push(action.payload);
      }
    },

    addToFavorites(state, action: PayloadAction<FavoriteItems>) {
      state.favoriteItems.push(action.payload);
    },
    deleteFavorite(state, action: PayloadAction<string>) {
      state.favoriteItems = state.favoriteItems.filter((item) => item.id !== action.payload);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchFavorites.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.status = 'success';
        state.favoriteItems = action.payload;
      });
  },
});

export const { setFavoriteItems, addToFavorites, deleteFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
