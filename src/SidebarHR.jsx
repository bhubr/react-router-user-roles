import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function SidebarHR() {
  return (
    <nav className="Sidebar">
      <Link to="/employees">Employés</Link>
      <Link to="/">Accueil HR</Link>
    </nav>
  )
}

export default SidebarHR;
