import React from 'react';
import { Button, Box } from '@material-ui/core';
import GetquizsForm from './GetquizsForm'

function DashboardForm () {
  const token = localStorage.getItem('token');
  let name = ''
  const [state, setState] = React.useState(0);
  if (state === 0) {
    setState(state + 1)
  }
  const createGame = async () => {
    await fetch('http://localhost:5005/admin/quiz/new', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name }),
    });
    setState(state + 1)
  };

  return (
    <>
      <Box p={1}>
        <a>Create a new game: </a>
        <input type='text' placeholder='Name' onChange={e => { name = e.target.value }}></input>
        <a> </a>
        <Button variant='contained' color='primary' onClick={ e => { createGame(); } } >Create</Button>
      </Box>
      <GetquizsForm />
    </>
  )
}

export default DashboardForm;
