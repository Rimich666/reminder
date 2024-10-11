import './header-button.css'
import {useDispatch} from 'react-redux';
import {openModal} from '../store/modal-slice.js';
import {ADD_MODE} from '../helpers/constants.js';
export default function HeaderButton({title}) {
  const dispatch = useDispatch();
  return (
    <button className={'header_button'} onClick={() => dispatch(openModal(ADD_MODE))}>
      {title}
    </button>
  )
}
