import React from 'react';
import { Button, Input, Box } from '@material-ui/core';
import { InputTitle } from '../style';
import { useNavigate } from 'react-router-dom';

function RegisterForm () {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');
  const navigate = useNavigate();

  const register = async () => {
    const response = await fetch('http://localhost:5005/admin/auth/register', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        name,
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
          type = "text"
          onChange={e => setEmail(e.target.value)}
        /><br/>
      </InputTitle>

      <InputTitle>
      Password:<Input
        type = "text"
        onChange={e => setPassword(e.target.value)}
      /><br/>
      </InputTitle>

      <InputTitle>
      Name:<Input
        type = "text"
        onChange={e => setName(e.target.value)}
      /><br/><br/>
      </InputTitle>

      <Box textAlign = 'center'>
        <Button variant = 'contained' color = 'primary' onClick={register}>Register</Button>
      </Box><br/>

    </>
  )
}

export default RegisterForm;
