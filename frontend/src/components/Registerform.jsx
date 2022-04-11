import React from 'react';
import { Button, TextField } from '@material-ui/core';

import { useNavigate } from 'react-router-dom';

function RegisterForm () {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');
  const navigate = useNavigate();

  const register = async () => {
    await fetch('http://localhost:5005/admin/auth/register', {
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
    navigate('/Dashboard');
  }

  return (
    <>
      Email:<TextField
        type = "text"
        onChange={e => setEmail(e.target.value)}
      /><br/>

      Password:<TextField
        type = "text"
        onChange={e => setPassword(e.target.value)}
      /><br/>

      Name:<TextField
        type = "text"
        onChange={e => setName(e.target.value)}
      /><br/><br/>

      <Button variant = 'contained' color = 'primary' onClick={register}>Register</Button>
    </>
  )
}

export default RegisterForm;
