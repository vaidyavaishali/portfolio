import { ToastContainer } from 'react-toastify';
import './App.css';
import MainPortFolio from './PortFolio/MainPortFolio';

function App() {
  return (
    <div className="App scroll-to-smooth">
            <ToastContainer position='top-right'/>
       <MainPortFolio/>
    </div>
  );
}

export default App;
