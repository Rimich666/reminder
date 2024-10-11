import {createSlice} from '@reduxjs/toolkit';
import {ReminderState} from '../helpers/constants.js';

export const reminderSlice = createSlice({
  name: 'reminders',
  initialState: {
    reminder: []
  },
  reducers: {
    add: (state, action) => {
      state.reminder.push({...action.payload, state: ReminderState.expected});
      console.log(state.reminder);
    },
    remove: (state, action) => {
      console.log(state.reminder);
    },
    edit: (state, action) => {
      console.log(state.reminder);
    },
  }
})

export const { add, remove, edit} = reminderSlice.actions

export default reminderSlice.reducer