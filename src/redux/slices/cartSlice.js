import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const loadStateFromLocalStorage = () => {
  const storedCartItems = localStorage.getItem('cartItems');
  const storedTotalPrice = localStorage.getItem('totalPrice');
  return {
    cartItems: storedCartItems ? JSON.parse(storedCartItems) : [],
    totalPrice: storedTotalPrice ? parseFloat(storedTotalPrice) : 0,
  };
};

// Сохраняем данные в localStorage
const saveStateToLocalStorage = (state) => {
  localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
  localStorage.setItem('totalPrice', state.totalPrice.toString());
};
export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async (product, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`https://12c37b99b44f3ed5.mokky.dev/cart`, product);
      return data;
    } catch (error) {
      return rejectWithValue(error.data.message);
    }
  },
);

export const removeCart = createAsyncThunk(
  'cart/removeCart',
  async (product, { rejectWithValue }) => {
    try {
      await axios.delete(`https://12c37b99b44f3ed5.mokky.dev/cart/${product.id}`);
      return product.id;
    } catch (error) {
      return rejectWithValue(error.data.message);
    }
  },
);

export const fetchCart = createAsyncThunk('cart/fetchCart', async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(`https://12c37b99b44f3ed5.mokky.dev/cart`);
    return data;
  } catch (error) {
    return rejectWithValue(error.data.message);
  }
});

const cartSlices = createSlice({
  name: 'cart',
  initialState: loadStateFromLocalStorage(),

  reducers: {
    // setAddItems(state, action) {
    //   const product = state.addItems.find((item) => item.id === action.payload.id);
    //   if (product) {
    //     state.totalPrice -= action.payload.price;
    //     state.addItems = state.addItems.filter((item) => item.id !== product.id);
    //   } else {
    //     state.addItems.push(action.payload);
    //     state.totalPrice += action.payload.price;
    //   }
    // },
    // setRemoveItem(state, action) {
    //   const findItem = state.addItems.find((obj) => obj.id === action.payload);
    //   if (findItem) {
    //     state.addItems = state.addItems.filter((item) => item.id !== action.payload);
    //     state.totalPrice -= findItem.price;
    //   }
    // },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.status = 'success';
        state.cartItems = action.payload;
        saveStateToLocalStorage(state);
      })
      .addCase(fetchCart.rejected, (state) => {
        state.status = 'error';
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.status = 'success';
        state.cartItems.push(action.payload);
        state.totalPrice += action.payload.price;
        saveStateToLocalStorage(state);
      })
      .addCase(removeCart.fulfilled, (state, action) => {
        state.status = 'success';
        const findItem = state.cartItems.find((item) => item.id === action.payload);
        state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
        if (findItem) {
          state.totalPrice -= findItem.price;
        }
        saveStateToLocalStorage(state);
      });
  },
});

export const { setAddItems, setRemoveItem } = cartSlices.actions;
export default cartSlices.reducer;
