import {LOCALE, ReminderState, STATES} from '../../helpers/constants.js';
import {useDispatch} from 'react-redux';
import {openModal} from '../../store/modal-slice.js';
import {remove} from '../../store/reminder-slice.js';

export default function FillSection({reminders}) {
  const dispatch = useDispatch();
  const rowCount = reminders.length;
  const deleteClickHandle = (evt) => {
    dispatch(remove(evt.target.value));
  }
  const editClickHandle = (evt) => {
    const rem = reminders[evt.target.value];
    if (rem.status === ReminderState.completed) {
      return;
    }
    dispatch(openModal(rem));
  }
  return (
    <ul className={'table'} style={{gridTemplateRows: `repeat(${rowCount}, 1fr)`}}>
      {reminders.map((rem, i) =>
        <li key={rem.ID} className={`table_row grid_row${i % 2 === 0 ? ' even' : ' odd'}`}>
          <p>{rem.ID}</p>
          <p>{Intl.DateTimeFormat(LOCALE, {dateStyle: 'short', timeStyle: "short"}).format(new Date(rem.date))}</p>
          <p>{rem.description}</p>
          <p>{STATES[rem.status]}</p>
          <div className={'actions'}>
            <button
              className={`actions_button action_edit${rem.status === ReminderState.completed ?'-disabled' : ''}`}
              value={i} onClick={editClickHandle}>Редактировать</button>
            <button className={'actions_button action_delete'} value={rem.ID} onClick={deleteClickHandle}>Удалить</button>
          </div>
        </li>)}
    </ul>
  );
}