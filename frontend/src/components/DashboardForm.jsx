import React from 'react';
import { Button, Box } from '@material-ui/core';
import GetquizsForm from './GetquizsForm'

function DashboardForm (showState) {
  const token = localStorage.getItem('token');
  let name = ''
  const [createState, setState] = React.useState(0);
  if (createState === 0) {
    setState(createState + 1)
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
    setState(createState + 1)
  };

  return (
    <>
      <Box p={1}>
        <a>Create a new game: </a>
        <input type='text' placeholder='Name' onChange={e => { name = e.target.value }}></input>
        <a> </a>
        <Button variant='contained' color='primary' onClick={ e => { createGame(); } } >Create</Button>
      </Box>
      <GetquizsForm createState = {createState} showState = {showState}/>
    </>
  )
}

export default DashboardForm;
