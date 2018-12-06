import React from 'react';
import { Route, Link } from 'react-router-dom';
import PollsContainer from '../containers/PollsContainer';
import Home from '../components/home/Home';
import { Signup, Login } from '../components/auth/Auth';

export const ROUTES = {
  HOME: {
    path: '/',
    Component: Home,
    linkTo: () => '/'
  },
  POLLS: {
    path: '/polls',
    Component: PollsContainer,
    linkTo: () => '/polls'
  },
  // SIGNUP: {
  //   path: '/signup',
  //   Component: Signup,
  //   linkTo: () => '/signup'
  // },
  // LOGIN: {
  //   path: '/login',
  //   Component: Login,
  //   linkTo: () => '/login'
  // }
};

export const rootLinks = () => {
  return Object.keys(ROUTES)
    .filter(routeName => ROUTES[routeName].linkTo.length === 0)
    .map((routeName, i) => {
      return <Link key={i} to={ROUTES[routeName].linkTo()} >{routeName.toLowerCase().replace('_', ' ')}</Link>
    });
};
export const routerRoutes = () => {
  return Object.values(ROUTES)
    .map((route, i) => {
      return <Route exact={route.linkTo.length === 0} key={i} path={route.path} component={route.Component} />;
    });
};
