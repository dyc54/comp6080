import React from 'react';
import LoginForm from '../components/LoginForm'
import { Title } from '../style';
import { Box, Paper } from '@material-ui/core';

function Login () {
  return <>
  <Box px = {30} py = {5} color = 'primary'>
    <Paper variant = 'outlined'>
      <Title>Login
      </Title>
      <LoginForm />
    </Paper>
  </Box>
  </>;
}

export default Login;
