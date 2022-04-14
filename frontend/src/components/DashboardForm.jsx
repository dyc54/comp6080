import React from 'react';
import { Button, Box } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import GetquizsForm from './GetquizsForm'

function DashboardForm () {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const [name, setGameName] = React.useState('');

  React.useEffect(() => {
    if (token === 'undefined') {
      navigate('/Register');
      alert('Incorrect input parameters, please register or log in again')
    }
  });

  const createGame = async () => {
    await fetch('http://localhost:5005/admin/quiz/new', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name }),
    });
  };

  return (
    <>
      <Box p={1}>
        <a>Create a new game: </a>
        <input type='text' placeholder='Name' onChange={e => setGameName(e.target.value)}></input>
        <a> </a>
        <Button variant='contained' color='primary' onClick={createGame}>Create</Button>
      </Box>
      <GetquizsForm />
    </>
  )
}

export default DashboardForm;
