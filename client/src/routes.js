import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './components/home/Home';
import Polls from './containers/polls/Polls';
import CreatePoll from './containers/polls/CreatePoll';

export const ROUTES = {
  HOME: {
    path: '/',
    Component: Home,
    linkTo: () => '/'
  },
  POLLS: {
    path: '/polls',
    Component: Polls,
    linkTo: () => '/polls'
  },
  CREATE_POLL: {
    path: '/polls/create',
    Component: CreatePoll,
    linkTo: () => '/polls/create'
  }

};

export const rootLinks = () => {
  return Object.keys(ROUTES)
    .filter(routeName => ROUTES[routeName].linkTo.length === 0)
    .map((routeName, i) => {
      return <Link key={i} to={ROUTES[routeName].linkTo()}>{routeName.toLowerCase().replace('_', ' ')}</Link>;
    });
};

export const routerRoutes = () => {
  return Object.values(ROUTES)
    .map((route, i) => {
      return <Route exact={route.linkTo.length === 0} key={i} path={route.path} component={route.Component} />;
    });
};
