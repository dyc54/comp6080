import React from 'react';
import { Box, Paper, Grid, makeStyles } from '@material-ui/core';
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

function AlertSessionIDForm (SIDstate) {
  const classes = useStyles();
  const quizId = useParams().quizId;
  const token = localStorage.getItem('token');
  const [SID, setSID] = React.useState(0)

  React.useEffect(() => {
    let quizzes = localStorage.getItem('quizzes');
    if (token !== 'undefined' && quizzes !== '[]') {
      quizzes = quizzes.slice(1, -1);
      const quizzesList = quizzes.split('},');
      for (let n = 0; n < quizzesList.length; n++) {
        if (n < quizzesList.length - 1) {
          quizzesList[n] = quizzesList[n] + '}';
        }
        quizzesList[n] = JSON.parse(quizzesList[n]);
      }
      for (let n = 0; n < quizzesList.length; n++) {
        if (quizzesList[n].id === parseInt(quizId)) {
          /* if (quizzesList.active !== null) {
            setSID(quizzesList.active)
          } */
          setSID(quizzesList.active)
        }
      }
    }
  }, [SIDstate]);

  return <>
    <div className={classes.root}>
      <Grid item xs={12}>
        <Box color='primary'>
          <Paper variant='outlined'>
            <h1>{SID}</h1>
          </Paper>
        </Box>
      </Grid>
    </div>
  </>;
}

export default AlertSessionIDForm;
