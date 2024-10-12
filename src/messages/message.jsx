import {LOCALE} from '../helpers/constants.js';
import {useDispatch} from 'react-redux';
import {complete, move} from '../store/reminder-slice.js';

export default function Message({rem}) {
  const dispatch = useDispatch();
  const completeClickHandle = () => {
    dispatch(complete(rem.ID));
  }

  const moveClickHandle = () => {
    dispatch(move(rem.ID));
  }

  return (
    <div className={'message_container'}>
      <div className={'box'}>
        <p className={'date'}>{Intl.DateTimeFormat(LOCALE, {dateStyle: 'short', timeStyle: "short"}).format(new Date(rem.date))}</p>
        <p className={'description'}>{rem.description}</p>
      </div>
      <div className={'box'}>
        <button className={'actions_button action_edit'} onClick={completeClickHandle}>Исполнено</button>
        <button className={'actions_button action_delete'} onClick={moveClickHandle}>Перенести</button>
      </div>
    </div>
  );
}
