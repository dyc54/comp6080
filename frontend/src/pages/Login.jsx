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

function Login () {
  const classes = useStyles();
  return <>
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
  </>;
}

export default Login;
