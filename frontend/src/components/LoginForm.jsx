import React from 'react';
import { Button, Input, Box } from '@material-ui/core';
import { InputTitle } from '../style';
import { useNavigate } from 'react-router-dom';

// Component
function LoginForm () {
  // Constants
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();

  // Login API
  const login = async () => {
    try {
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
      const status = response.status;
      // If token is valid go to dashborad, else go back to register
      if (status === 200) {
        localStorage.setItem('token', data.token);
        navigate('/Dashboard');
      } else {
        navigate('/Register');
        alert('Incorrect input parameters, please register or log in again')
      }
    } catch (err) {
      alert(err);
    }
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
        <Button variant='contained' color='primary' onClick={login}>Login</Button>
      </Box><br />

    </>
  )
}

export default LoginForm;
