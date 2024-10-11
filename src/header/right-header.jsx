import CustomSelect from '../custom-select/custom-select.jsx';
import Button from '../button.jsx';

export default function RightHeader() {
  const onSelect = () => {

  }
  return (
    <div className={'header'}>
      <Button/>
      <CustomSelect
        callback={onSelect}
        options={['ожидаемые', 'выполненные']}
        value={'ожидаемые'}
      />
    </div>
  )
}
