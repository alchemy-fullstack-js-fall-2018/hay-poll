import React from 'react';
import { Route, Link } from 'react-router-dom';
import About from '../components/resources/about/About.jsx';
import Home from '../components/resources/home/Home.jsx';
// import PollList from '../resources/poll/PollList.jsx';
// import { Session } from '../lib/Session.jsx';

export const ROUTES = {
  ABOUT: {
    path: '/about/',
    Component: About,
    linkTo: () => '/about'
  },
  HOME: {
    path: '/home/',
    Component: Home,
    linkTo: () => '/home',
  },
  //   POLLS: {
  //     path: '/polls',
  //     Component: Session(PollList),
  //     linkTo: () => '/polls'
  //   },
  //   CREATE_POLL: {
  //     path: '/polls/create',
  //     Component: PollCreate,
  //     linkTo: () => '/polls/create'
  //   },
  //   POLL: {
  //     path: '/polls/:id',
  //     Component: PollDetails,
  //     linkTo: id => `/polls/${id}`
  //   },
  //   AUTH: {
  //     path: '/auth',
  //     Component: Auth,
  //     linkTo: () => '/auth'
  //   }
};

export const rootLinks = () => {
  return Object.keys(ROUTES)
    .filter(routeName => ROUTES[routeName].linkTo.length === 0)
    .map((routeName, i) => (
      <Link key={i} to={ROUTES[routeName].linkTo()}>{routeName.toLowerCase().replace('_', ' ')}</Link>
    ));
};

export const routerRoutes = () => {
  return Object.values(ROUTES)
    .map((route, i) => (
      <Route exact={route.linkTo.length === 0} key={i} path={route.path} component={route.Component} />
    ));
};
