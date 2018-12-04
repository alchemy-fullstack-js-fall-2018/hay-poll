import { Router } from 'express';
import poll from './poll';

const resources = [
  poll
];

export default Router().use('/', ...resources);
