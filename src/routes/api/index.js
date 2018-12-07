import { Router } from 'express';
import polls from './polls';
import auth from './auth';

const resources = [
  auth,
  polls
];

export default Router().use('/', ...resources);
