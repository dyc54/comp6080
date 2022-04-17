import React from 'react';
import RegisterForm from '../components/Registerform'
import { Title } from '../style';
import { Box, Paper, Grid, makeStyles, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

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
function Register () {
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
      <Grid item xs={12}>
        <Box color = 'primary'>
            <Paper variant = 'outlined'>
                <Title>Register
                </Title>
                <RegisterForm />
            </Paper>
        </Box>
      </Grid>
  </div>
  </>;
}

export default Register;
