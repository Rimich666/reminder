import CustomSelect from '../custom-select/custom-select.jsx';
import HeaderButton from './header-button.jsx';
import {FILTERS, SORT_TITLES} from '../../helpers/constants.js';
import {useDispatch, useSelector} from 'react-redux';
import {selectOptions} from '../../store/selectors.js';
import {setFilter, setOrder, setSortOption} from '../../store/option-slice.js';

export default function RightHeader({onAddClick}) {
  const dispatch = useDispatch();
  const {order, filter, sort} = useSelector(selectOptions);
  const onSelect = (value) => {
    dispatch(setFilter(value));
  }

  const onSort = (value) => {
    dispatch(setSortOption(value));
  }

  const clickOrderHandle = () => {
    dispatch(setOrder());
  }

  return (
    <div className={'right'}>
      <div className={'block'}>
        <CustomSelect
          callback={onSort}
          options={SORT_TITLES}
          value={sort}
          title={'Сортировать по'}
        />
        <div className={`order${order===1 ? ' rotate' : ''}`} onClick={clickOrderHandle}>
          <svg width="22" height="30" viewBox="0 0 22 30" fill="none" xmlns="http://www.w3.org/2000/svg" className={'sort_arrow'}>
            <path
              d="M7 1V17.5H1.8C1.4 17.5 1.1 17.7 0.899996 18.1C0.699996 18.5 0.799996 18.9 1.1 19.2L10.3 29.7C10.5 29.9 10.8 30 11.1 30C11.4 30 11.7 29.9 11.9 29.7L21.1 19.2C21.3 19 21.3 18.8 21.3 18.5C21.3 18.4 21.3 18.2 21.2 18.1C21 17.7 20.7 17.5 20.3 17.5H15V1C15 0.4 14.6 0 14 0H8C7.4 0 7 0.4 7 1ZM13 2V18.5C13 19.1 13.4 19.5 14 19.5H18L11 27.5L4 19.5H8C8.6 19.5 9 19.1 9 18.5V2H13Z"
              fill="#60F947"/>
          </svg>
        </div>
      </div>
      <div className={'block'}>
        <CustomSelect
          callback={onSelect}
          options={FILTERS}
          value={filter}
          title={'Показывать'}
        />
        <HeaderButton
          title={'Добавить'}
          callback={onAddClick}
        />
      </div>
    </div>
  )
}
