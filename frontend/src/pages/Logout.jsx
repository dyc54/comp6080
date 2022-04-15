import React from 'react';
import LoginForm from '../components/LoginForm'
import { Title } from '../style';
import { Box, Paper, Grid, makeStyles } from '@material-ui/core';

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
      localStorage.setItem('questions', '{}');
    }
  }
  register();
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Grid item xs={12}>
          <Box color='primary'>
            <Paper variant='outlined'>
              <Title>Login
              </Title>
              <LoginForm />
            </Paper>
          </Box>
        </Grid>
      </div>
    </>
  );
}
export default LogoutForm;
