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

  React.useEffect(() => {
    fetch('http://localhost:5005/admin/quiz', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }).then(response => response.json())
      .then(data => console.log(data.quizzes));
  });

  return (
    <>
      <Button variant='contained' color='primary'>Dashboard</Button>
    </>
  )
}

export default DashboardForm;
