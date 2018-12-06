import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

import About from '../resources/about/About.jsx';
import Home from '../resources/home/Home.jsx';
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


const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: BOMBARD;
    src: url("/src/assets/fonts/BOMBARD.ttf") format("opentype");
  }
  #root {
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
    text-align: center;
    margin: 0;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
    font-family: sans-serif;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
  }
`;

const theme = {
  primary: 'rgb(0, 153, 0)',
  secondary: 'rgb(204, 255, 255)',
  darksecondary: 'rgb(107, 48, 13)',
  accent: 'rgb(173, 38, 36)'
};

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Fragment>

          <Helmet>
            <title>Hay Poll</title>
            <link rel="icon" href="/src/assets/favicon.ico"/>
            <link rel="manifest" href="/src/assets/manifest.json"/>
          </Helmet>

          <GlobalStyle/>

          <Header/>

          <Switch>
            <Route exact component={ROUTES.ABOUT.Component} path={ROUTES.ABOUT.path} />
            <Route exact component={ROUTES.HOME.Component} path={ROUTES.HOME.path} />
            <Redirect to={ROUTES.HOME.path} />
          </Switch>

          <Footer/>

        </Fragment>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
