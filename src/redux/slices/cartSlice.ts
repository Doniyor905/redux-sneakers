import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

type CartItemsType = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
};

type Items = {
  cartItems: CartItemsType[];
  totalPrice: number;
  status: string;
};

export const fetchCart = createAsyncThunk<CartItemsType[], void, { rejectValue: string }>(
  'cart/fetchCart',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`https://12c37b99b44f3ed5.mokky.dev/cart`);
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
  cartItems: [],
  totalPrice: 0,
  status: '',
};

const cartSlices = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    fetchCart(state, action: PayloadAction<CartItemsType[]>) {
      state.cartItems = action.payload;
    },
    addToCart(state, action: PayloadAction<CartItemsType>) {
      state.cartItems.push(action.payload);
      state.totalPrice += action.payload.price;
    },
    removeCart(state, action: PayloadAction<string>) {
      const findItem = state.cartItems.find((item) => item.id === action.payload);
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
      console.log(action.payload);
      if (findItem) {
        state.totalPrice -= findItem.price;
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.status = 'success';
        state.cartItems = action.payload;
      })
      .addCase(fetchCart.rejected, (state) => {
        state.status = 'error';
      });
  },
});

export const { addToCart, removeCart } = cartSlices.actions;
export default cartSlices.reducer;
