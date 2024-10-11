import Header from './header/header.jsx';
import Modal from './modal/modal.jsx';
import {useSelector} from 'react-redux';
import Table from './table/table.jsx';

function App() {
  const modal = useSelector(state => state.modal.modal);
  return (
    <div className={'container'}>
      <Header/>
      <Table/>
      <Modal mode={modal}/>
    </div>
  )
}

export default App
