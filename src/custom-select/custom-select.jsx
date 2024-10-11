import './custom-select.css'
import {useState} from 'react';

export default function CustomSelect({callback, options, value}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selection, setSelection] = useState(options[value]);

  const arrowClickHandle = () => {
    console.log(isOpen);
    setIsOpen(!isOpen);
  };

  const selectHandle = (env) => {
    setIsOpen(!isOpen);
    setSelection(options[env.currentTarget.title] ?? '');
    callback(env.currentTarget.title);
  };

  const arrow =
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.7083 8.9585L9.99996 11.8752L7.29163 8.9585" stroke="#B0B0B6" strokeWidth="1.5"
              strokeLinecap="round" strokeLinejoin="round"/>
      </svg>


  return (
    <div className={'select_container'}>
      <div className={'custom_select'}>
        <span className={'selection'}>{selection}</span>
        <button
          className={'select_button'}
          type="button"
          onClick={arrowClickHandle}
        >
          <span className={'select_arrow'}>
            {arrow}
          </span>
        </button>
        <ul className={`select_list${isOpen ? ' is_open' : ' is_close'}`} role="listbox">
          {Object.keys(options).map((key) => (
            <li role={'presentation'} title={key} key={key} onClick={selectHandle}>
              {options[key]}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
