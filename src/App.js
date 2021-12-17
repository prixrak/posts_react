import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/UI/navbar/Navbar';


import './styles/App.css';
import Router from './components/Router';
import { AuthContext } from './context';
import { useState, useEffect } from 'react/cjs/react.development';

function App() { 
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('auth')) setIsAuth(true);
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      isLoading
    }}>
      <BrowserRouter>
        <Navbar />
        <Router />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;