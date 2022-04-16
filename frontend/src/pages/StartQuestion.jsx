import React from 'react';
import { Title } from '../style';
import { Box, Paper, Grid, makeStyles } from '@material-ui/core';
import StartQuestionForm from '../components/StartQuestionForm'
import { useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
}));

function QuestionStart () {
  const classes = useStyles();
  const [state, setState] = React.useState(0)
  const [startState, setStartState] = React.useState(0)
  const quizId = useParams().quizId;
  const token = localStorage.getItem('token');
  if (startState === 0) {
    setStartState(startState + 1)
  }
  React.useEffect(() => {
    if (token !== 'undefined') {
      fetch(`http://localhost:5005/admin/quiz/${quizId}/start`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: undefined,
      }).then(setState(state + 1))
    }
  }, [startState]);

  return <>
  <div className={classes.root}>
      <Grid item xs={12}>
        <Box color = 'primary'>
            <Paper variant = 'outlined'>
                <Title>Start Question
                </Title>
                <StartQuestionForm state={state}/>
            </Paper>
        </Box>
      </Grid>
  </div>
  </>;
}

export default QuestionStart;
