import {createSlice} from '@reduxjs/toolkit';
import {ReminderState, TEN_MINUTES} from '../helpers/constants.js';

export const reminderSlice = createSlice({
  name: 'reminders',
  initialState: {
    reminder: [],
    check: 0
  },
  reducers: {
    add: (state, action) => {
      state.reminder.push({...action.payload, status: ReminderState.expected, isActive: false});
    },
    remove: (state, action) => {
      state.reminder.splice(action.payload, 1);
    },
    edit: (state, action) => {
      state.reminder[action.payload.id].description = action.payload.description;
      state.reminder[action.payload.id].date = action.payload.date;
    },
    check: (state) => {
      state.check = Date.now();
    },
    complete: (state, action) => {
      state.reminder[action.payload].status = ReminderState.completed;
    },
    move: (state, action) => {
      state.reminder[action.payload].date = Date.now() + TEN_MINUTES;
    }
  }
})

export const {
  add,
  remove,
  edit,
  check,
  complete,
  move
} = reminderSlice.actions

export default reminderSlice.reducer