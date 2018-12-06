import { Router } from 'express';
import polls from './polls/routes';
import users from './users/routes';

const resources = [
  polls, users
];

export default Router().use('/', ...resources);
