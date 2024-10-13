import { configureStore } from '@reduxjs/toolkit'
import reminderReducer from './reminder-slice.js';
import modalReducer from './modal-slice.js';
import optionReducer from './option-slice.js';
import {loadState, localStorageMiddleware} from './local-storage.js';

export default configureStore({
  reducer: {
    reminder: reminderReducer,
    modal: modalReducer,
    options: optionReducer
  },
  preloadedState: loadState(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
})
