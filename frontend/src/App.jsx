import React from 'react';
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import Register from './pages/Register';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Dashboard from './pages/Dashboard';
import QuizEdit from './pages/EditQuiz';
import QuestionEdit from './pages/EditQuestion';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
}));

function App () {
  const classes = useStyles();
  return (
    <>
      <BrowserRouter>
      <div className={'top_nav'}>
            <Grid item xs={12}>
                <Paper className={classes.paper} >
                        <h2>BigBrain</h2>
                        <Link to='/register'>
                            <Button variant="contained" color="primary">
                                Register
                            </Button>
                        </Link>
                        <Link to='/login'>
                            <Button variant="contained" color="default">
                                Login
                            </Button>
                        </Link>
                    </Paper>
            </Grid>
        </div>
        <Routes>
          <Route path='/register' element = {<Register />}/>
          <Route path="/login" element={<Login />} />
          <Route path='/dashboard' element = {<Dashboard />}/>
          <Route path='/quizedit/:quizId' element = {<QuizEdit />}/>
          <Route path='/quizedit/:quizId/:questionId' element = {<QuestionEdit />}/>
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
