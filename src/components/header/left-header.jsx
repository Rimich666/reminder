import {useDispatch, useSelector} from 'react-redux';
import {setSearch} from '../../store/option-slice.js';
import {LEN} from '../../helpers/constants.js';

export default function LeftHeader() {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.options.search);
  const isTitleVisible = search.length === 0;
  const inputHandler = (evt) => {
    dispatch(setSearch(evt.target.value.substring(0, LEN)));
  }
  return(
    <div className={'right'}>
      <div className={'search_container'}>
        <input className={'search'} value={search} onInput={inputHandler}/>
        {isTitleVisible &&
          <div className={'title_container'}>
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"
               className={'glass'}>
            <path
              d="M6.97947 0.425781C10.5223 0.425781 13.3925 3.29599 13.3925 6.83884C13.3925 8.37027 12.857 9.77435 11.9623 10.878L16.3705 15.2862C16.6317 15.5474 16.6317 15.9686 16.3705 16.2299C16.1093 16.4911 15.688 16.4911 15.4268 16.2299L11.0187 11.8217C9.91498 12.7164 8.5109 13.2519 6.97947 13.2519C3.43661 13.2519 0.566407 10.3817 0.566407 6.83884C0.566407 3.29599 3.43988 0.425781 6.97947 0.425781ZM6.97947 11.9197C9.78437 11.9197 12.0603 9.64374 12.0603 6.83884C12.0603 4.03394 9.78437 1.75803 6.97947 1.75803C4.17457 1.75803 1.89865 4.03394 1.89865 6.83884C1.89865 9.64374 4.17457 11.9197 6.97947 11.9197Z"
              fill="#A8ACC6"/>
          </svg>
          <span className={'search_title'}>Поиск...</span>
        </div>}
      </div>
    </div>
  );
}
