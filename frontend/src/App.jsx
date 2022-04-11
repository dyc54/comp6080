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
import Dashboard from './pages/Dashboard';

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
          <Route path='/register' element = {<Register />}/>
          <Route path='/dashboard' element = {<Dashboard />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

