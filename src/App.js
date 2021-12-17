import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/UI/navbar/Navbar';


import './styles/App.css';
import Router from './components/Router';

function App() { 
  return (
    <BrowserRouter>
      <Navbar />
      <Router />
    </BrowserRouter>

  );
}

export default App;