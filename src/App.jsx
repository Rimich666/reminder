import Header from './header/header.jsx';
import {useState} from 'react';
import Modal from './modal/modal.jsx';

function App() {
  const [modal, setModal] = useState(false);
  const showModal = (modal) => {
    setModal(true);
  }

  const closeModal = () => {
    setModal(false);
  }

  return (
    <div className={'container'}>
      <Header onAddClick={showModal}/>
      <main>
        Main
      </main>
      <Modal show={modal} closeHandler={closeModal}/>
    </div>
  )
}

export default App
