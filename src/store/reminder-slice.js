import {createSlice} from '@reduxjs/toolkit';
import {ReminderState, TEN_MINUTES} from '../helpers/constants.js';

const remindFake = [
  {
    date: Date.now(),
    description: 'Сварить борщ',
    status: ReminderState.expected,
  },
  {
    date: Date.now() + 1,
    description: 'Скосить борщевик',
    status: ReminderState.completed,
  },
  {
    date: Date.now() + 2,
    description: 'Не переборщить с солью',
    status: ReminderState.completed,
  },
  {
    date: Date.now() + 3,
    description: 'Не пересолить борщ',
    status: ReminderState.expected,
  },
  {
    date: Date.now() + 4,
    description: 'Захватить мир',
    status: ReminderState.expected,
  },
  {
    date: Date.now() + 5,
    description: 'Разобраться с ковром',
    status: ReminderState.completed,
  },
  {
    date: Date.now() + 6,
    description: 'Покосить газон',
    status: ReminderState.expected,
  },
  {
    date: Date.now() + 7,
    description: 'Убрать покос',
    status: ReminderState.expected,
  },
  {
    date: Date.now() + 8,
    description: 'поправить покосившийся забор',
    status: ReminderState.expected,
  },
  {
    date: Date.now() + 9,
    description: 'Заправить борщ свежим сеном с покоса',
    status: ReminderState.expected,
  },
  {
    date: Date.now() + 10,
    description: 'Разобраться с Алладином',
    status: ReminderState.expected,
  },
]


export const reminderSlice = createSlice({
  name: 'reminders',
  initialState: {
    reminder: remindFake
  },
  reducers: {
    add: (state, action) => {
      state.reminder.push({...action.payload, state: ReminderState.expected});
    },
    remove: (state, action) => {
      state.reminder.splice(action.payload, 1);
    },
    edit: (state, action) => {
      state.reminder[action.payload.id].description = action.payload.description;
      state.reminder[action.payload.id].date = action.payload.date;
    },
  }
})

export const { add, remove, edit} = reminderSlice.actions

export default reminderSlice.reducer