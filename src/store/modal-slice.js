import {createSlice} from '@reduxjs/toolkit';
import {ADD_MODE, TEN_MINUTES} from '../helpers/constants.js';

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
      if (action.payload === ADD_MODE) {
        state.date = Date.now() + TEN_MINUTES;
        state.description = '';
        state.modal = action.payload;
        return;
      }
      state.date = action.payload.date;
      state.description = action.payload.description;
      state.modal = action.payload.ID;
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