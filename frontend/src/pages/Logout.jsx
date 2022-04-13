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
      },
      body: JSON.stringify({ token })
    });
    const data = await response.json();
    localStorage.setItem('token', data.token);
  }
  register();
  const classes = useStyles();
  document.getElementsByClassName('top_nav')[0].style.display = 'block';
  return (
    <>
      <div className={classes.root}>
      <Grid item xs={12}>
        <Box color = 'primary'>
            <Paper variant = 'outlined'>
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
