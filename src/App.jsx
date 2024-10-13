import Header from './components/header/header.jsx';
import Modal from './components/modal/modal.jsx';
import {useSelector} from 'react-redux';
import Table from './components/table/table.jsx';
import Massages from './components/messages/massages.jsx';

function App() {
  const modal = useSelector(state => state.modal.modal);
  return (
    <div className={'container'}>
      <Header/>
      <Table/>
      <Modal mode={modal}/>
      <Massages/>
    </div>
  )
}

export default App
