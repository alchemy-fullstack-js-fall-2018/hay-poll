import { Router } from 'express';
import polls from './Polls';

const resources = [
  polls
];

export default Router().use('/', ...resources);
