import React from 'react';
import RegisterForm from '../components/Registerform'
import { Title } from '../style';
import { Box, Paper } from '@material-ui/core';

function Register () {
  return <>
  <Box px = {30} py = {5} color = 'primary'>
    <Paper variant = 'outlined'>
      <Title>
        Register
      </Title>
      <RegisterForm />
    </Paper>
  </Box>
  </>;
}

export default Register;
