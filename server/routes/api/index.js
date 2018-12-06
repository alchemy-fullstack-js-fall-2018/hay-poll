import { Router } from 'express';
import poll from './poll';
import user from './user';

const resources = [
  poll, user
];

export default Router().use('/', ...resources);
