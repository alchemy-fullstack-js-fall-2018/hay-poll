import { Router } from 'express';
import test from './test';

const resources = [
  test
];

export default Router().use('/', ...resources);
