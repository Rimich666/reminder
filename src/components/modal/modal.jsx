import './modal.css'
import AddModal from './add-modal.jsx';
import {useDispatch} from 'react-redux';
import {close} from '../../store/modal-slice.js';
import {ADD_MODE} from '../../helpers/constants.js';

export default function Modal({mode}) {
  const show = mode !== null;
  const dispatch = useDispatch();
  return (
    <div className={`modal${show ? ' modal-show' : ''}`}>
      <div className={'modal_container'}>
        <div className={'modal_head'}>
          <h2>{mode === ADD_MODE ? 'Новое напоминание' : `Редактирование напоминания № ${mode}`}</h2>
          <button onClick={() => {dispatch(close())}} className={'cross_button'}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.25 6.75L6.75 17.25" stroke="#B0B0B6" strokeWidth="1.5" strokeLinecap="round"
                    strokeLinejoin="round"/>
              <path d="M6.75 6.75L17.25 17.25" stroke="#B0B0B6" strokeWidth="1.5" strokeLinecap="round"
                    strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        <AddModal id={mode}/>
      </div>
    </div>
  )
}