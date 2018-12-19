import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ROUTES from '../../routes/routes';
import Header from '../header/Header';

export default function App() {
  return (
    <Fragment>
      <h1>Hello World!</h1>
      <Router>
        <Fragment>
          <Header />
          <Switch>
            <Route path={ROUTES.SIGNUP.path} component={ROUTES.SIGNUP.component} />
            <Route path={ROUTES.LOGIN.path} component={ROUTES.LOGIN.component} />
            <Route path={ROUTES.POLL_DETAIL.path} component={ROUTES.POLL_DETAIL.component} />
            <Route path={ROUTES.POLLS.path} component={ROUTES.POLLS.component} />
            <Route path={ROUTES.HOME.path} component={ROUTES.HOME.component} />
          </Switch>
        </Fragment>
      </Router>
    </Fragment>
  );
}
