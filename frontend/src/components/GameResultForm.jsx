import React from 'react';
import { InputTitle } from '../style';
import { useNavigate } from 'react-router-dom';
import { Button, Box } from '@material-ui/core';

function GameResultForm () {
  const navigate = useNavigate();

  const goDashboard = async () => {
    navigate('/dashboard')
  }

  return (
    <>
      <InputTitle>
        Top 5 users:
        <br/><br/>
      </InputTitle>
      <Box textAlign='right' margin={1}>
        <Button variant='contained' color='primary' onClick={goDashboard}>Back to Dashboard</Button>
      </Box><br />
    </>
  )
}

export default GameResultForm;
