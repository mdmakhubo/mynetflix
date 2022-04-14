import React, { useContext } from 'react';
import './App.scss';
import Home  from './pages/home/Home';
import Watch from './pages/watch/Watch';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import { AuthContext } from './authContext/AuthContext';
import { Routes, Route } from 'react-router-dom';

function App() {
  const {user} = useContext(AuthContext);
  return (
      <Routes>        
        <Route exact path="/" element={user ? <Home /> : <Register />} />
        <Route path="/register" element={!user ? <Register /> : <Home />} />
        <Route path="/login" element={!user ? <Login /> : <Home />} />
        {
          user && (
            <>
              <Route path="/movies" element={<Home type="movie" />} />
              <Route path="/series" element={<Home type="series" />} />
              <Route path="/watch" element={<Watch />} />
            </>
          )
        }        
      </Routes>
  );
}

export default App;
