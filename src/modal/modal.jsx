import './modal.css'
import AddModal from './add-modal.jsx';

export default function Modal({show, closeHandler}) {
  return (
    <div className={`modal${show ? ' modal-show' : ''}`}>
      <div className={'modal_container'}>
        <div className={'modal_head'}>
          <h2>{'Новое напоминание'}</h2>
          <button onClick={closeHandler}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.25 6.75L6.75 17.25" stroke="#B0B0B6" strokeWidth="1.5" strokeLinecap="round"
                    strokeLinejoin="round"/>
              <path d="M6.75 6.75L17.25 17.25" stroke="#B0B0B6" strokeWidth="1.5" strokeLinecap="round"
                    strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        {<AddModal/>}
      </div>
    </div>
  )
}