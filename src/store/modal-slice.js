import {createSlice} from '@reduxjs/toolkit';
import {TEN_MINUTES} from '../helpers/constants.js';

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    modal: null,
    date: 0,
    description: '',
  },
  reducers: {
    close: state => {
      state.modal = null;
      state.date = 0;
      state.description = '';
    },
    openModal: (state, action) => {
      state.date = Date.now() + TEN_MINUTES;
      state.description = '';
      state.modal = action.payload;
    },
    setDate: (state, action) => {
      console.log(action.payload);
      state.date = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
  }
})

export const {
  close,
  openModal,
  setDate,
  setDescription,
} = modalSlice.actions;

export default modalSlice.reducer;