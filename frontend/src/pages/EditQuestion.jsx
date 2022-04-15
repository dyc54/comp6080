import React from 'react';
import EditQuestionForm from '../components/EditQuestionForm'
import { Title } from '../style';
import { Box, Paper, Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
}));

function QuestionEdit () {
  const classes = useStyles();
  return <>
  <div className={classes.root}>
      <Grid item xs={12}>
        <Box color = 'primary'>
            <Paper variant = 'outlined'>
                <Title>Edit Question
                </Title>
                <EditQuestionForm />
            </Paper>
        </Box>
      </Grid>
  </div>
  </>;
}

export default QuestionEdit;
