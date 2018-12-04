import About from '../components/presentational/about/About.jsx';
import Home from '../components/presentational/home/Home.jsx';

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
  }
};
