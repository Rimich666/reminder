import './header.css'
import LeftHeader from './left-header.jsx';
import RightHeader from './right-header.jsx';

export default function Header() {
  return (
    <header className={'header'}>
      <LeftHeader/>
      <RightHeader/>
    </header>
  )
}