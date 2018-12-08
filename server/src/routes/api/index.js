import { Router } from 'express';
import polls from './polls';
import auth from './users';
const resources = [
  polls,
  auth
];

export default Router().use('/', ...resources);
