import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ROUTES } from '../../routes';
import { Helmet } from 'react-helmet';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

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
            <title>Redux Blogging</title>
            <link rel="icon" href="/src/assets/favicon.ico"/>
          </Helmet>
          <GlobalStyle/>
          <Header />
          <Switch>
            <Route exact component={ROUTES.ABOUT.Component} path={ROUTES.ABOUT.path} />
            <Route exact component={ROUTES.HOME.Component} path={ROUTES.HOME.path} />
            <Route exact component={ROUTES.POSTS.Component} path={ROUTES.POSTS.path} />
            <Route exact component={ROUTES.POST_DETAIL.Component} path={ROUTES.POST_DETAIL.path} />
            <Route exact component={ROUTES.USER_REGISTER.Component} path={ROUTES.USER_REGISTER.path} />
            <Route exact component={ROUTES.USERS.Component} path={ROUTES.USERS.path} />
            <Route exact component={ROUTES.USER_DETAIL.Component} path={ROUTES.USER_DETAIL.path} />
            <Redirect to={ROUTES.HOME.path} />
          </Switch>
          <Footer />
        </Fragment>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
