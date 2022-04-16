import React from 'react';
import { Popper, makeStyles, Button } from '@material-ui/core';
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
  const quizId = useParams().quizId;
  const token = localStorage.getItem('token');
  const [SID, setSID] = React.useState(0)
  const [S, setS] = React.useState(0)
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

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
          if (quizzesList[n].active === null) {
            setS(S + 1)
          } else {
            setSID(quizzesList[n].active);
            localStorage.setItem('sessionId', JSON.stringify(quizzesList[n].active));
          }
        }
      }
    }
  }, [SIDstate, S]);

  return <>
    <div>
      <Button variant="contained" color="primary" aria-describedby={id} onClick={handleClick}>
        Get Session ID
      </Button>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <div className={classes.paper}>{SID}</div>
      </Popper>
    </div>
  </>;
}

export default AlertSessionIDForm;
