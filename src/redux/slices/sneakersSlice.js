import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// type SneakersItems = {
//   id: string;
//   title: string;
//   price: number;
//   imageUrl: string;
// };

// type Items = {
//   items: SneakersItems[];
//   status: string;
// };

// type ParamsType = {
//   search: string;
//   sortBy: string;
// };

export const fetchSneakers = createAsyncThunk('sneakers/fetchSneakers', async ({ params }) => {
  const { search, sortBy } = params;
  const { data } = await axios.get(
    `https://12c37b99b44f3ed5.mokky.dev/items?${search}&sortBy=${sortBy}`,
  );
  return data;
});

// const initialState: Items = {
//   items: [],
//   status: '',
// };

const sneakersSlice = createSlice({
  name: 'sneakers',
  initialState: {
    items: [],
    status: '',
  },
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSneakers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSneakers.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = 'success';
      })
      .addCase(fetchSneakers.rejected, (state) => {
        state.status = 'error';
      });
  },
});

export const { setItems } = sneakersSlice.actions;
export default sneakersSlice.reducer;
