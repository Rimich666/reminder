import './table.css';
import {useSelector} from 'react-redux';
import {HEADERS} from '../../helpers/constants.js';
import EmpySection from './empy-section.jsx';
import FillSection from './fill-section.jsx';
import {selectReminder} from '../../store/selectors.js';

export default function Table() {
  const reminders = useSelector(selectReminder);
  const isEmpty = reminders.length === 0;

  return (
    <main className={'table_container'}>
      <header className={'table_header grid_row'}>
        {HEADERS.map((head, i) => <p key={i}>{head}</p>)}
      </header>
      {isEmpty ? <EmpySection/> : <FillSection reminders={reminders}/>}
      <footer className={''}></footer>
    </main>
  )
}