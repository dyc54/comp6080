import React from 'react';
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Register from './pages/Register';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Dashboard from './pages/Dashboard';
import QuizEdit from './pages/EditQuiz';
import QuestionEdit from './pages/EditQuestion';
import QuestionStart from './pages/StartQuestion';
import GameResult from './pages/GameResult';
import Default from './pages/Default';

function App () {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Default />}/>
          <Route path='/register' element = {<Register />}/>
          <Route path="/login" element={<Login />} />
          <Route path='/dashboard' element = {<Dashboard />}/>
          <Route path='/quizedit/:quizId' element = {<QuizEdit />}/>
          <Route path='/quizedit/:quizId/:questionId' element = {<QuestionEdit />}/>
          <Route path="/logout" element={<Logout />} />
          <Route path='/quizstart/:quizId' element = {<QuestionStart />}/>
          <Route path='/gameresult/:sessionId' element = {<GameResult />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
