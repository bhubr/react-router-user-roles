import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Login';
import LandingPage from './LandingPage';
import DashboardHR from './DashboardHR';
import DashboardTenured from './DashboardTenured';

// roleId
// 1 = HR
const userHR = {
  id: 1, roleId: 1, name: 'Ginette RH'
};

const userTenured = {
  id: 2, roleId: 2, name: 'Maurice Titulaire'
};

function getHomeComponent(user) {
  if (!user) {
    return LandingPage;
  }
  switch(user.roleId) {
    case 1:
      return DashboardHR;
    case 2:
      return DashboardTenured;
    default:
      return <p>Does not exist</p>;
  }
}

function NotFound() {
  return <h1>Page not found</h1>;
}

function App() {
  const [user, setUser] = useState(null);
  const HomeComponent = getHomeComponent(user);
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={HomeComponent} />
        <Route component={NotFound} />
      </Switch>

      {/* Cest moche */}
      <div>
        <button type="button" onClick={() => setUser(userHR)}>Login as HR</button>
        <button type="button" onClick={() => setUser(userTenured)}>Login as tenured</button>
        <button type="button" onClick={() => setUser(null)}>Logout</button>
      </div>
    </div>
  );
}

export default App;
