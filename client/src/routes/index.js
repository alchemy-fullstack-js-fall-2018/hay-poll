import React from 'react';
import { Route, Link } from 'react-router-dom';
import About from '../components/resources/about/About.jsx';
import Home from '../components/resources/home/Home.jsx';
import PollList from '../components/resources/poll/PollList.jsx';
import PollDetail from '../components/resources/poll/PollDetail.jsx';
import { Session } from '../components/lib/Session.jsx';
import Auth from '../components/resources/auth/Auth.jsx';

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
  POLLS: {
    path: '/polls',
    Component: PollList,
    // Component: Session(PollList),
    linkTo: () => '/polls'
  },
  POLL: {
    path: '/polls/:id',
    Component: PollDetail,
    linkTo: id => `/polls/${id}`
  },
  //   CREATE_POLL: {
  //     path: '/polls/create',
  //     Component: PollCreate,
  //     linkTo: () => '/polls/create'
  //   },
  //   AUTH: {
  //     path: '/auth',
  //     Component: Auth,
  //     linkTo: () => '/auth'
  //   }
  SIGNUP: {
    path: '/signup',
    Component: Auth,
    linkTo: () => '/signup'
  },
  LOGIN: {
    path: '/login',
    Component: Auth,
    linkTo: () => '/login'
  }
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
