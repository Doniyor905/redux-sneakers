import { createSlice } from '@reduxjs/toolkit';

const filterSlices = createSlice({
  name: 'filter',
  initialState: {
    sortBy: '',
    searchCard: '',
  },
  reducers: {
    setSortBy(state, action) {
      state.sortBy = action.payload;
    },
    setSearchCard(state, action) {
      state.searchCard = action.payload;
    },
  },
});

export const { setSortBy, setSearchCard } = filterSlices.actions;
export default filterSlices.reducer;
