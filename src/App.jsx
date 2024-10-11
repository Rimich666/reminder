import Header from './header/header.jsx';
import Modal from './modal/modal.jsx';
import {useSelector} from 'react-redux';

function App() {
  const modal = useSelector(state => state.modal);
  return (
    <div className={'container'}>
      <Header/>
      <main>
        Main
      </main>
      <Modal show={modal}/>
    </div>
  )
}

export default App
