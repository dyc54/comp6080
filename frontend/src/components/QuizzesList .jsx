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
const DeleteGame = async (id) => {
  const token = localStorage.getItem('token');
  console.log(token)
  await fetch(`http://localhost:5005/admin/quiz/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: '{}'
  });
}
*/

function StorQuestions (quizzes) {
  const token = localStorage.getItem('token');
  if (token !== 'undefined' && quizzes !== '[]') {
    const questions = async () => {
      const response = await fetch(`http://localhost:5005/admin/quiz/${quizzes.id}`, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: undefined,
      });
      if (response.status === 200) {
        const data = await response.json();
        localStorage.setItem('quizzesDetail', JSON.stringify(data));
      }
    }
    questions();
  }
}

function QuizzesList () {
  const classes = useStyles();
  const token = localStorage.getItem('token');
  let quizzes = localStorage.getItem('quizzes');
  if (token !== 'undefined' && quizzes !== '[]') {
    quizzes = quizzes.slice(1, -1);
    const quizzesList = quizzes.split('},');
    for (let n = 0; n < quizzesList.length; n++) {
      if (n < quizzesList.length - 1) {
        quizzesList[n] = quizzesList[n] + '}';
      }
      quizzesList[n] = JSON.parse(quizzesList[n]);
      StorQuestions(quizzesList[n]);
      let quizzesDetail = localStorage.getItem('quizzesDetail');
      if (quizzesDetail === '{}') {
        break;
      }
      quizzesDetail = JSON.parse(quizzesDetail);
      quizzesList[n].questionsNum = quizzesDetail.questions.length;
      quizzesList[n].questionsSumTime = 0;
    }
    return (
      <>
        {
          quizzesList.map(item => (
            <div key={item.createdAt} className={classes.root}>
              <Grid item xs={12}>
                <Paper className={classes.paper} >
                  <h4>Title: {item.name}</h4>
                  <h4>Number of questions: {item.questionsNum }</h4>
                  <img src={item.thumbnail} alt="" />
                  <h4>Total time to complete: {item.questionsSumTime}</h4>
                  <br />
                  <Link key={item.id} to={`/quizedit/${item.id}`}>
                      <Button variant="contained" color="primary">
                          Edit
                      </Button>
                  </Link>
                  <Link to='/logout'>
                      <Button variant="contained" color="default">
                          Play
                      </Button>
                  </Link>
                  <Button variant="contained" color="secondary" /* onClick = { DeleteGame(item.id)} */>
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
export default QuizzesList;
