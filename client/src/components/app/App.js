import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { routerRoutes } from '../../routes/routes';
import Header from '../app/Header';

export default function App() {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          {routerRoutes()}
        </Switch>
      </>
    </Router>
  );
}
