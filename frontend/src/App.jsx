import React from 'react';
import './App.css';
import { Title } from './style';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import Register from './pages/Register';
import Login from './pages/Login';

function App () {
  return (
    <>
      <BrowserRouter>
      <nav><Title>
          <Link to='/register'>
            Register
          </Link>| |
          <Link to='/login'>
            Login
          </Link>
        </Title></nav>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
