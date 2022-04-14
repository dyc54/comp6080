import React from 'react';
import { Button, Paper, Grid, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
}));

/*
function DeleteQuestion (id) {
  const token = localStorage.getItem('token');
  console.log('1' + id)
  fetch(`http://localhost:5005/admin/quiz/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      questions: [],
    })
  });
}
*/

function GetQuestionsForm () {
  const classes = useStyles();
  let questionsList = [];
  const questions = localStorage.getItem('questions');
  if (questions !== '{}') {
    questionsList = JSON.parse(questions);
    questionsList = questionsList.questions;
    console.log(questionsList.questions)

    return (
      <>
        {
          questionsList.map(item => (
            <div key={item.questionId} className={classes.root}>
              <Grid item xs={12}>
                <Paper className={classes.paper} >
                  <h4>ID: {item.questionId}</h4>
                  <h4>Type of questions: {item.questionType}</h4>
                  <img src={item.thumbnail} alt="" />
                  <h4>Limit Time: {item.Limit}</h4>
                  <h4>Points: {item.Points}</h4>
                  <br />
                  <Link to={`/logout${item.id}`}>
                    <Button variant="contained" color="primary">
                      Edit
                    </Button>
                  </Link>
                    <Button variant="contained" color="secondary" /* onClick = { DeleteQuestion(item.id) } */>
                      Delete
                    </Button>
                </Paper>
              </Grid>
            </div>
          ))
        }
      </>
    )
  }
  return (
        <>
            <h3>Please create a new game</h3>
        </>
  )
}
export default GetQuestionsForm;
