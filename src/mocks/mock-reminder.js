import {ReminderState, TEST_TIME} from '../helpers/constants.js';

export const remindFake = [
  {
    date: Date.now(),
    description: 'Сварить борщ',
    status: ReminderState.expected,
  },
  {
    date: Date.now() + 1 * TEST_TIME,
    description: 'Скосить борщевик',
    status: ReminderState.completed,
  },
  {
    date: Date.now() + 2 * TEST_TIME,
    description: 'Не переборщить с солью',
    status: ReminderState.completed,
  },
  {
    date: Date.now() + 3 * TEST_TIME,
    description: 'Не пересолить борщ',
    status: ReminderState.expected,
  },
  {
    date: Date.now() + 4 * TEST_TIME,
    description: 'Захватить мир',
    status: ReminderState.expected,
  },
  {
    date: Date.now() + 5 * TEST_TIME,
    description: 'Разобраться с ковром',
    status: ReminderState.completed,
  },
  {
    date: Date.now() + 6 * TEST_TIME,
    description: 'Покосить газон',
    status: ReminderState.expected,
  },
  {
    date: Date.now() + 7 * TEST_TIME,
    description: 'Убрать покос',
    status: ReminderState.expected,
  },
  {
    date: Date.now() + 8 * TEST_TIME,
    description: 'поправить покосившийся забор',
    status: ReminderState.expected,
  },
  {
    date: Date.now() + 9 * TEST_TIME,
    description: 'Заправить борщ свежим сеном с покоса',
    status: ReminderState.expected,
  },
  {
    date: Date.now() + 10 * TEST_TIME,
    description: 'Разобраться с Алладином',
    status: ReminderState.expected,
  },
]