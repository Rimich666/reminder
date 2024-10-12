import {LOCALE, STATES} from '../helpers/constants.js';

export default function FillSection({reminders}) {
  const rowCount = reminders.length;
  const deleteClickHandle = (evt) => {
    console.log(evt.target.value);
  }
  const editClickHandle = (evt) => {
    console.log(evt.target.value);
  }
  return (
    <ul className={'table'} style={{gridTemplateRows: `repeat(${rowCount}, 1fr)`}}>
      {reminders.map((rem) =>
        <li key={rem.ID} className={'table_row grid_row'}>
          <p>{rem.ID}</p>
          <p>{Intl.DateTimeFormat(LOCALE, {dateStyle: 'short', timeStyle: "short"}).format(new Date(rem.date))}</p>
          <p>{rem.description}</p>
          <p>{STATES[rem.status]}</p>
          <div className={'actions'}>
            <button className={'action_edit'} value={rem.ID} onClick={editClickHandle}>Редактировать</button>
            <button className={'action_delete'} value={rem.ID} onClick={deleteClickHandle}>Удалить</button>
          </div>
        </li>)}
    </ul>
  );
}