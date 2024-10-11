import { configureStore } from '@reduxjs/toolkit'
import reminderReducer from './reminder-slice.js';
import modalReducer from './modal-slice.js';

export default configureStore({
  reducer: {
    reminder: reminderReducer,
    modal: modalReducer
  }
})