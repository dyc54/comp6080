import React from 'react';
import EditQuizForm from '../components/EditQuizForm'
import { Title } from '../style';
import { Box, Paper, Grid, makeStyles } from '@material-ui/core';

// style
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
}));

// Component
function QuizEdit () {
  const classes = useStyles();
  return <>
  <div className={classes.root}>
      <Grid item xs={12}>
        <Box color = 'primary'>
            <Paper variant = 'outlined'>
                <Title>Edit Game
                </Title>
                <EditQuizForm />
            </Paper>
        </Box>
      </Grid>
  </div>
  </>;
}

export default QuizEdit;
