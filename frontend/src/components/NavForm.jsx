import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
}));

function NavForm () {
  const classes = useStyles();
  const token = localStorage.getItem('token');
  document.getElementsByClassName('top_nav')[0].style.display = 'none';
  if (token !== 'undefined') {
    return (
          <div className={classes.root}>
              <Grid item xs={12}>
                  <Paper className={classes.paper} >
                          <Link to='/logout'>
                              <Button variant="contained" color="primary">
                                  Logout
                              </Button>
                          </Link>
                      </Paper>
              </Grid>
          </div>
    )
  }
  return (
        <div className={classes.root}>
            <Grid item xs={12}>
                <Paper className={classes.paper} >
                        <h1>BigBring</h1>
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
  )
}

export default NavForm;
