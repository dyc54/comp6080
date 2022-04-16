import React from 'react';
import { Box, Button, Paper, Grid, makeStyles } from '@material-ui/core';
import { useParams, useNavigate } from 'react-router-dom';
import AlertSessionIDForm from './AlertSessionIDForm'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
}));

function StartQuestionForm (state) {
  const classes = useStyles();
  const quizId = useParams().quizId;
  const token = localStorage.getItem('token');
  const [SIDstate, setSIDState] = React.useState(0)
  const [ENDstate, setENDDState] = React.useState(0)
  const navigate = useNavigate();

  React.useEffect(() => {
    if (token !== 'undefined') {
      fetch('http://localhost:5005/admin/quiz', {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: undefined,
      }).then(response => response.json()).then(data => localStorage.setItem('quizzes', JSON.stringify(data.quizzes))).then(setSIDState(SIDstate + 1))
    }
  }, [state, ENDstate]);

  const EndQuestion = async () => {
    await fetch(`http://localhost:5005/admin/quiz/${quizId}/end`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: undefined,
    });
    setENDDState(ENDstate + 1);
    const sID = localStorage.getItem('sessionId')
    navigate(`/gameresult/${sID}`)
  }

  return <>
  <div className={classes.root}>
      <Grid item xs={12}>
        <Box color = 'primary'>
            <Paper variant = 'outlined'>
                <Button variant="contained" color="secondary" onClick = {() => EndQuestion() }>
                    END GAME
                </Button>
                <br />
                <br />
                <AlertSessionIDForm SIDstate={SIDstate} />
            </Paper>
        </Box>
      </Grid>
  </div>
  </>;
}

export default StartQuestionForm;
