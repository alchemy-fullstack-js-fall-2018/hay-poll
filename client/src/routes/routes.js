import Home from '../components/home/Home';
import Polls from '../containers/polls/PollsContainer';
import PollDetail from '../containers/polls/PollDetailContainer';
import { Signup, Login } from '../containers/auth/Auth';
import { withSession } from '../components/auth/withSession';

export default {
  HOME: {
    path: '/',
    component: Home,
    linkTo: () => '/'
  },
  POLLS: {
    path: '/polls',
    component: withSession(Polls),
    linkTo: () => '/polls'
  },
  POLL_DETAIL: {
    path: '/polls/:id',
    component: PollDetail,
    linkTo: id => `/polls/${id}`
  },
  SIGNUP: {
    path: '/signup',
    component: Signup,
    linkTo: () => '/signup'
  },
  LOGIN: {
    path: '/login',
    component: Login,
    linkTo: () => '/login'
  }
};
