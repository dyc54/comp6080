import React from 'react';
import { Button, Box } from '@material-ui/core';
import GetquizsForm from './GetquizsForm'

function DashboardForm () {
  const token = localStorage.getItem('token');
  const [name, setname] = React.useState('');
  const [createState, setState] = React.useState(0);
  if (createState < 2) {
    setState(createState + 1)
  }
  const createGame = async () => {
    setState(createState + 1);
    try {
      await fetch('http://localhost:5005/admin/quiz/new', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name }),
      }).then(setState(createState + 1));
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <>
      <Box p={1}>
        <a>Create a new game: </a>
        <input type='text' placeholder='Name' onChange={e => { setname(e.target.value) }}></input>
        <a> </a>
        <Button variant='contained' color='primary' onClick={e => { createGame(); }} >Create</Button>
      </Box>
      <GetquizsForm createState={createState} />
    </>
  )
}

export default DashboardForm;
