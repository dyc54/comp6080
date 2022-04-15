import React from 'react';
import { Button, Paper, Grid, makeStyles } from '@material-ui/core';
import { Link, useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
}));

function ClearNullArr (arr) {
  for (let i = 0, len = arr.length; i < len; i++) {
    if (!arr[i] || arr[i] === '' || arr[i] === undefined) {
      arr.splice(i, 1);
      len--;
      i--;
    }
  }
  return arr;
}

function UpdatQuestion (quizId, token) {
  if (token !== 'undefined') {
    fetch(`http://localhost:5005/admin/quiz/${quizId}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: undefined,
    }).then(response => response.json()).then(data => localStorage.setItem('questions', JSON.stringify(data)))
  }
}

function GetQuestionsForm (Id) {
  const quizId = useParams().quizId;
  const classes = useStyles();
  const [newQuestionsList, setPosts] = React.useState([]);
  const [state, setState] = React.useState([]);
  const token = localStorage.getItem('token');
  const setTextList = () => {
    const lists = state.concat();
    lists.splice(-1, 0, 'update');
    setState(lists);
  }
  function DeleteQuestion (id, questionsList, questionId) {
    const token = localStorage.getItem('token');
    const questionsListT = questionsList;
    let n = 0
    for (n = 0; n < questionsList.length - 1; n++) {
      if (questionsList[n].questionId === questionId) {
        break
      }
    }
    for (let i = n, len = questionsList.length - 1; i < len; i++) {
      questionsList[i] = questionsList[i + 1];
      questionsList.length = len;
    }
    if (questionsList.length === 1) {
      questionsList = [];
    }
    if (questionId === 1) {
      questionsListT.splice(0, 1);
      questionsList = questionsListT;
    }
    questionsList = ClearNullArr(questionsList);
    fetch(`http://localhost:5005/admin/quiz/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        questions: questionsList,
      })
    }).then(UpdatQuestion(id, token)).then(setTextList())
  }

  React.useEffect(() => {
    const questions = localStorage.getItem('questions');
    if (questions !== '{}') {
      let questionsList = JSON.parse(questions);
      questionsList = questionsList.questions;
      questionsList = ClearNullArr(questionsList);
      setPosts(questionsList)
    }
  }, [state, Id]);
  if (token !== 'undefined') {
    return (
      <>
        {
          newQuestionsList.map(item => (
            <div key={item.questionId} className={classes.root}>
              <Grid item xs={12}>
                <Paper className={classes.paper} >
                  <h5>ID: {item.questionId}</h5>
                  <h5>Title: {item.questionItself}</h5>
                  <h5>Type: {item.questionType}</h5>
                  <img src={item.thumbnail} alt="" />
                  <h5>Limit Time: {item.Limit}</h5>
                  <h5>Points: {item.Points}</h5>
                  <br />
                  <Link to={`/quizedit/${quizId}/${item.questionId}`}>
                    <Button variant="contained" color="primary">
                      Edit
                    </Button>
                  </Link>
                  <Button variant="contained" color="secondary" onClick={() => DeleteQuestion(quizId, newQuestionsList, item.questionId)}>
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
      <h3>Please create a new question</h3>
    </>
  )
}
export default GetQuestionsForm;
