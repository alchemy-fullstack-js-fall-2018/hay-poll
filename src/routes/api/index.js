import { Router } from 'express';
import polls from './polls';

const resources = [
  polls
];

export default Router().use('/', ...resources);
