import './message.css';
import {check} from '../../store/reminder-slice.js';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {INTERVAL} from '../../helpers/constants.js';
import Message from './message.jsx';
import {selectActive} from '../../store/selectors.js';

export default function Massages() {
  const dispatch = useDispatch();
  const activated = useSelector(selectActive);
  const show = activated.length > 0;
  const checkReminders = () => {
    dispatch(check());
  }
  useEffect(() => {
    checkReminders();
    setInterval(checkReminders, INTERVAL);
  }, []);
  return (
    <div className={`messages_modal${show ? ' messages_modal-visible' : ''}`}>
      <div className={'messages_container'}>
        {activated.map((rem) => <Message rem={rem} key={rem.ID}/>)}
      </div>
    </div>
  );
}
