import './header-button.css'
export default function HeaderButton({title, callback}) {
  return (
    <button className={'header_button'} onClick={callback}>
      {title}
    </button>
  )
}
