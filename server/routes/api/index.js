import { Router } from 'express';
import poll from './poll';
import auth from './auth';

const resources = [
  poll, auth
];

export default Router().use('/', ...resources);
