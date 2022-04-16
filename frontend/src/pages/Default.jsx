import React from 'react';
import { Title } from '../style';
import { Paper, makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
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

function Default () {
  const classes = useStyles();
  return <>
  <div className={'top_nav'}>
      <Grid item xs={12}>
          <Paper className={classes.paper} >
                  <h2>BigBrain</h2>
                  <Link to='/register'>
                      <Button variant="contained" color="primary">
                          Register
                      </Button>
                  </Link>
                  <Link to='/login'>
                      <Button variant="contained" color="default">
                          Login
                      </Button>
                  </Link>
              </Paper>
      </Grid>
  </div>
  <div className={classes.root}>
    <Paper variant = 'outlined'>
        <Title className={'welcome'}>Welcome to BigBrain !!!</Title>
    </Paper>
  </div>
  </>;
}

export default Default;
