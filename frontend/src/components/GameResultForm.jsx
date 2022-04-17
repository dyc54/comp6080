import React from 'react';
import { InputTitle } from '../style';
import { Button, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';

function GameResultForm () {
  return (
    <>
      <InputTitle>
        Top 5 users:
        <br/><br/>
      </InputTitle>
      <Box textAlign='right' margin={1}>
        <Link to='/dashboard'>
          <Button variant='contained' color='primary'>Back to Dashboard</Button>
        </Link>
      </Box><br />
    </>
  )
}

export default GameResultForm;
