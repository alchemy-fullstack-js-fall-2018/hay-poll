import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from '../header/Header';
import { routerRoutes } from '../../routes/routes';

export default function App() {
  return (
    <Router>
      <Fragment>
        <Header />
        <Switch>
          {routerRoutes()}
        </Switch>
      </Fragment>
    </Router>
  );
}
