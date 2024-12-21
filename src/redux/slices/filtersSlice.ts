import { createSlice, PayloadAction } from '@reduxjs/toolkit';
type Filter = {
  sortBy: string;
  searchCard: string;
};

const initialState: Filter = {
  sortBy: '',
  searchCard: '',
};

const filterSlices = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSortBy(state, action: PayloadAction<string>) {
      state.sortBy = action.payload;
    },
    setSearchCard(state, action: PayloadAction<string>) {
      state.searchCard = action.payload;
    },
  },
});

export const { setSortBy, setSearchCard } = filterSlices.actions;
export default filterSlices.reducer;
