import React from 'react';
import { Button, Input, Box } from '@material-ui/core';
import { InputTitle } from '../style';
import { useNavigate } from 'react-router-dom';

function LoginForm () {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();

  const register = async () => {
    const response = await fetch('http://localhost:5005/admin/auth/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      })
    });

    const data = await response.json();
    localStorage.setItem('token', data.token);
    navigate('/Dashboard');
  }

  return (
    <>
      <InputTitle>
        Email:<Input
          type="text"
          onChange={e => setEmail(e.target.value)}
        /><br />
      </InputTitle>

      <InputTitle>
        Password:<Input
          type="text"
          onChange={e => setPassword(e.target.value)}
        /><br />
      </InputTitle>

      <Box textAlign='center'>
        <Button variant='contained' color='primary' onClick={register}>Login</Button>
      </Box><br />

    </>
  )
}

export default LoginForm;
