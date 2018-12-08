import Home from '../components/home/Home';
import Polls from '../containers/polls/PollsContainer';
import PollDetail from '../containers/polls/PollDetailContainer';

export default {
  HOME: {
    path: '/',
    component: Home,
    linkTo: () => '/'
  },
  POLLS: {
    path: '/polls',
    component: Polls,
    linkTo: () => '/polls'
  },
  POLL_DETAIL: {
    path: '/polls/:id',
    component: PollDetail,
    linkTo: id => `/polls/${id}`
  } 
};
