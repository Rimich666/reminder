import "flatpickr/dist/themes/dark.css";
import {useRef} from 'react';
import './picker-input.css';
import Flatpickr from 'react-flatpickr';
import {LOCALE, TEN_MINUTES} from '../helpers/constants.js';
import {useDispatch, useSelector} from 'react-redux';
import {setDate} from '../store/modal-slice.js';

export default function PickerInput (){
  const fp = useRef(null);
  const dispatch = useDispatch()
  const date = useSelector((state) => state.modal.date);
  console.log(date);
  const currentDate = date ? new Date(date) : new Date(Date.now() + TEN_MINUTES);
  const changeHandle = (selectedDates) => {
    console.log(selectedDates[0]);
    console.log(selectedDates[0].getTime());
    dispatch(setDate(selectedDates[0].getTime()));
  };

  return (
    <div className={'picker_wrapper'}>
      <Flatpickr
        ref={fp}
        onChange={changeHandle}
        options={{
          enableTime: true,
          defaultDate: currentDate,
          minDate: new Date(Date.now() + TEN_MINUTES)
        }}
        className={'picker_input'}
      />
      <p>{Intl.DateTimeFormat(LOCALE, {dateStyle: 'full', timeStyle: "short"}).format(currentDate)}</p>
    </div>
  );
};