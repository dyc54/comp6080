import React from 'react';
import { Button, Paper, Grid, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

// Style
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
}));

// Update quiz
const Updataquize = async (token) => {
  if (token !== 'undefined') {
    await fetch('http://localhost:5005/admin/quiz', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: undefined,
    }).then(response => response.json()).then(data => localStorage.setItem('quizzes', JSON.stringify(data.quizzes)))
  }
}

// Store questions to local storage
function StorQuestions (question) {
  const token = localStorage.getItem('token');
  if (token !== 'undefined' && question !== '[]') {
    const questions = async () => {
      const response = await fetch(`http://localhost:5005/admin/quiz/${question.id}`, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: undefined,
      });
      // If valid store questions
      if (response.status === 200) {
        const data = await response.json();
        localStorage.setItem('quizzesDetail', JSON.stringify(data));
      }
    }
    questions();
  }
}

// Component
function QuizzesList (createState, StoreState) {
  // Constants
  const [newQuizzesList, setPosts] = React.useState([]);
  const [state, setState] = React.useState(0);
  const [DeleteState, setDeleteState] = React.useState(0);
  const token = localStorage.getItem('token');

  // Delete a game API
  const DeleteGame = async (id) => {
    try {
      await fetch(`http://localhost:5005/admin/quiz/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: undefined,
      }).then(response => response.json()).then(Updataquize(token)).then(setDeleteState(DeleteState + 1))
    } catch (err) {
      console.log(err)
    }
  }

  // Get the quiz list
  React.useEffect(() => {
    let quizzes = localStorage.getItem('quizzes');
    if (quizzes !== '[1]') {
      let quizzesList = [];
      if (quizzes !== '[]') {
        quizzes = quizzes.slice(1, -1);
        quizzesList = quizzes.split('},');
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
      }
      setPosts(quizzesList);
    } else {
      setState(state + 1)
    }
  }, [state]);
  const classes = useStyles();
  return (
      <>
        {
          newQuizzesList.map(item => (
            <div key={item.createdAt} className={classes.root}>
              <Grid item xs={12}>
                <Paper className={classes.paper} >
                  <h4>Title: {item.name}</h4>
                  <h4>Number of questions: {item.questionsNum}</h4>
                  <img src={item.thumbnail} alt="" />
                  <h4>Total time to complete: {item.questionsSumTime}</h4>
                  <br />
                  <Link key={item.id} to={`/quizedit/${item.id}`}>
                    <Button variant="contained" color="primary">
                      Edit
                    </Button>
                  </Link>
                  <Link to={`/quizstart/${item.id}`}>
                    <Button variant="contained" color="default">
                      Play
                    </Button>
                  </Link>
                  <Button variant="contained" color="secondary" onClick={() => { DeleteGame(item.id); }}>
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
export default QuizzesList;
