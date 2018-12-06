import About from '../components/resources/about/About.jsx';
import Home from '../components/resources/home/Home.jsx';
// import PollList from '../components/resources/poll/PollList.jsx';
// import { Session } from '../components/lib/Session.jsx';

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
