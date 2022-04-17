import React from 'react';
import GameResultForm from '../components/GameResultForm'
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
function GameResult () {
  const classes = useStyles();
  return <>
  <div className={classes.root}>
      <Grid item xs={12}>
        <Box color = 'primary'>
            <Paper variant = 'outlined'>
                <Title>Game Result
                </Title>
                <GameResultForm />
            </Paper>
        </Box>
      </Grid>
  </div>
  </>;
}

export default GameResult;
