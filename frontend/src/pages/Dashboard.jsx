import React from 'react';
import DashboardForm from '../components/DashboardForm'
import NavForm from '../components/NavForm'

function Dashboard () {
  return <>
      <NavForm />
      <h1>Dashboard</h1>
      <DashboardForm />
  </>;
}

export default Dashboard;
