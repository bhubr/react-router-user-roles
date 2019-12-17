import React from 'react';
import { Link, Route } from 'react-router-dom';
import NavbarHR from './NavbarHR';
import SidebarHR from './SidebarHR';
import Employees from './Employees';
import './Dashboard.css';

function DashboardHR() {
  return (
    <div className="Dashboard">
      <NavbarHR />
      <div className="Dashboard-inner">
        <SidebarHR />
        <h1>Dashboard HR</h1>

        <Route path="/employees" component={Employees} />
        <Route path="/" />
      </div>
    </div>
  )
}

export default DashboardHR;
