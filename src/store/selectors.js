import {createSelector} from '@reduxjs/toolkit';
import {SORT_OPTIONS} from '../helpers/constants.js';

const selectSort = (state) => state.options.sort;
const selectFilter = (state) => state.options.filter;
const selectOrder = (state) => state.options.order;
const selectSearch = (state) => state.options.search;

export const selectOptions =
  createSelector(
    [selectSort, selectFilter, selectOrder, selectSearch], (sort, filter, order, search) =>
      ({order, sort, filter, search}))

const selectReminderSimple = (state) => state.reminder.reminder;

export const selectReminder =
  createSelector(
    [selectSort, selectFilter, selectOrder, selectSearch, selectReminderSimple],
    (sort, filter, order, search, reminders) => {
      const isSortDescription = SORT_OPTIONS[sort] === 'description';
      const isSearch = search.length > 0;
      let copy = reminders
        .map((rem, i) => ({...rem, ID: i}));
      if (filter < 2) {
        console.log(copy);
        copy = copy.filter((rem) => rem.status === Number(filter));
      }
      const sortField = isSortDescription ? 'zip' : SORT_OPTIONS[sort];
      if (isSortDescription || isSearch) {
        copy = copy.map((rem) => ({...rem, zip: rem.description.toLowerCase()}));
      }
      const getSort = (a, b) => {
        return (a > b ? -1 : 1) * order;
      };
      copy.sort((a, b) => a === b ? 0 : getSort(a[sortField], b[sortField]));
      if (isSearch) {
        copy = copy.filter((rem) => rem.zip.includes(search));
      }
      return copy;
    }
  )

