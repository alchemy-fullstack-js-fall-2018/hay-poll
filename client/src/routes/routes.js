import React from 'react';
import Home from '../components/home/Home';
import PollDetailContainer from '../container/PollDetailContainer';
import { Link, Route } from 'react-router-dom';
import CreatePollContainer from '../container/CreatePollContainer';

export const ROUTES = {
  HOME: {
    path: '/',
    Component: Home,
    linkTo: () => '/'
  },
  POLL: {
    path: '/poll/:id',
    Component: PollDetailContainer,
    linkTo: id => `/poll/${id}`
  },
  CREATE_POLL: {
    path: '/poll',
    Component: CreatePollContainer,
    linkTo: () => '/poll'
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
