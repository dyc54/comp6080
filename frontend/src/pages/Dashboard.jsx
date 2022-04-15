import React from 'react';
import DashboardForm from '../components/DashboardForm'
import NavForm from '../components/NavForm'
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

function Dashboard () {
  const classes = useStyles();
  return <>
      <NavForm />
      <div className={classes.root}>
      <Grid item xs={12}>
        <Box color = 'primary'>
            <Paper variant = 'outlined'>
                <Title>Dashboard
                </Title>
                <DashboardForm/>
            </Paper>
        </Box>
      </Grid>
  </div>
  </>;
}

export default Dashboard;
