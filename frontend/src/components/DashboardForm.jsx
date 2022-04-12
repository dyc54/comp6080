import React from 'react';
import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

function DashboardForm () {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  React.useEffect(() => {
    if (token === 'undefined') {
      navigate('/Register');
      alert('Incorrect input parameters, please register or log in again')
    }
  });
  return (
    <>

      <Button variant='contained' color='primary'>Dashboard</Button>
    </>
  )
}

export default DashboardForm;
