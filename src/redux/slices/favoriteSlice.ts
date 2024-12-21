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

export const addToFavorites = createAsyncThunk<
  FavoriteItems,
  FavoriteItems,
  { rejectValue: string }
>('favorite/addToFavorites', async (obj, { rejectWithValue }) => {
  try {
    const { data } = await axios.post(`https://12c37b99b44f3ed5.mokky.dev/favorites`, obj);
    return data;
  } catch (error) {
    const axiosError = error as AxiosError<{ message: string }>;
    if (axiosError.response) {
      return rejectWithValue(axiosError.response.data.message);
    }
    return rejectWithValue('Неизвестная ошибка');
  }
});

export const deleteFavorite = createAsyncThunk<any, string, { rejectValue: string }>(
  'favorite/deleteFavorite',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`https://12c37b99b44f3ed5.mokky.dev/favorites/${id}`);
      return id;
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
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchFavorites.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.status = 'success';
        state.favoriteItems = action.payload;
      })
      .addCase(addToFavorites.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addToFavorites.fulfilled, (state, action) => {
        state.status = 'success';
        state.favoriteItems.push(action.payload);
      })
      .addCase(deleteFavorite.pending, (state) => {
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
