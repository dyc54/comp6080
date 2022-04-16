import React from 'react';
import { Paper, Grid, makeStyles } from '@material-ui/core';
import QuizzesList from './QuizzesList'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
}));

function GetquizsForm () {
  const classes = useStyles();
  const token = localStorage.getItem('token');
  React.useEffect(() => {
    if (token !== 'undefined') {
      fetch('http://localhost:5005/admin/quiz', {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: undefined,
      }).then(response => response.json())
        .then(data => { localStorage.setItem('quizzes', JSON.stringify(data.quizzes)); })
    }
  });

  return (
    <>
    <div className={classes.root}>
              <Grid item xs={12}>
                  <Paper className={classes.paper} >
                  <QuizzesList/>
                      </Paper>
              </Grid>
          </div>
    </>
  )
}
export default GetquizsForm;
