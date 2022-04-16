import React from 'react';
import { Paper, Grid, makeStyles, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Title } from '../style';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
}));

function LogoutForm () {
  const token = localStorage.getItem('token');
  const register = async () => {
    const response = await fetch('http://localhost:5005/admin/auth/logout', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const status = response.status;
    if (status === 200) {
      document.getElementsByClassName('top_nav')[0].style.display = 'block';
      localStorage.setItem('token', 'undefined');
      localStorage.setItem('quizzes', '[]');
      localStorage.setItem('quizzesDetail', '{}');
    }
  }
  register();
  const classes = useStyles();
  return (
    <>
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
      <div className={classes.root}>
    <Paper variant = 'outlined'>
        <Title className={'welcome'}>You have logged out!</Title>
    </Paper>
  </div>
    </>
  );
}
export default LogoutForm;
