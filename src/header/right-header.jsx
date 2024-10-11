import CustomSelect from '../custom-select/custom-select.jsx';
import HeaderButton from './header-button.jsx';

export default function RightHeader({onAddClick}) {
  const onSelect = () => {
    console.log('onSelect')
  }

  const onSort = () => {
    console.log('onSort')
  }

  return (
    <div className={'header right'}>
      <HeaderButton
        title={'Добавить'}
        callback={onAddClick}
      />
      <CustomSelect
        callback={onSort}
        options={['Время', 'Описание', 'Статус']}
        value={0}
        title={'Сортировка:'}
      />
      <CustomSelect
        callback={onSelect}
        options={['Ожидаемые', 'Выполненные', 'Все']}
        value={0}
        title={'Статус:'}
      />
    </div>
  )
}
