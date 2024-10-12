import {createSlice} from '@reduxjs/toolkit';
import {Orders} from '../helpers/constants.js';

export const optionSlice = createSlice({
  name: 'options',
  initialState: {
    filter: 0,
    sort: 0,
    order: Orders.asc,
    search: ''
  },
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setSortOption: (state, action) => {
      state.sort = action.payload;
    },
    setOrder: (state) => {
      state.order *= -1
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    }
  }
})

export const {
  setSearch,
  setFilter,
  setOrder,
  setSortOption
} = optionSlice.actions;

export default optionSlice.reducer;