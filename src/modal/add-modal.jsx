import PickerInput from './picker-input.jsx';
import {useDispatch, useSelector} from 'react-redux';
import {close, setDescription} from '../store/modal-slice.js';
import {add, edit} from '../store/reminder-slice.js';
import {ADD_MODE} from '../helpers/constants.js';

export default function AddModal({id}) {
  const dispatch = useDispatch();
  const description = useSelector((state) => state.modal.description);
  const date = useSelector((state) => state.modal.date);

  const clickCancelHandle = () => {
    dispatch(setDescription(''));
    dispatch(close());
  }

  const inputHandle = (evt) => {
    dispatch(setDescription(evt.target.value));
  }

  const clickSaveHandle = () => {
    if (id === ADD_MODE) {
      dispatch(add({description, date}));
    } else {
      dispatch(edit({id, description, date}))
    }
    dispatch(close());
  }

  return (
    <div>
      <div className={'field_head'}>
        <p className={'my-auto'}>Время напоминания:</p>
      </div>
      <PickerInput date={date}/>
      <div className={'field_head'}>
        <p className={'my-auto'}>Описание:</p>
      </div>
      <textarea className={'modal_area'} onInput={inputHandle} value={description}/>
      <button className={'modal_button save'} onClick={clickSaveHandle}>Сохранить</button>
      <button className={'modal_button cancel'} onClick={clickCancelHandle}>Отменить</button>
    </div>
  );
}
