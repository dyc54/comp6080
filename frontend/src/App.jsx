import React from 'react';
import './App.css';
import { SwitchPage } from './style';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App () {
  return (
    <>
      <BrowserRouter>
        <nav><SwitchPage>
          <Link to='/register'>
            Register
          </Link>| |
          <Link to='/login'>
            Login
          </Link>
        </SwitchPage></nav>
        <Routes>
          <Route path='/register' element = {<Register />}/>
          <Route path="/login" element={<Login />} />
          <Route path='/dashboard' element = {<Dashboard />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
