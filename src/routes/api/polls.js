import { Router } from 'express';
import Poll from '../../models/Poll';

export default Router()
  .post('/', (req, res, next) => {
    const { issue, options } = req.body;

    Poll.create({ issue, options })
      .then(poll => res.json(poll))
      .catch(next)
  })
  .get('/', (req, res, next) => {
    Poll
      .find()
      .lean()
      .then(polls => res.json(polls))
  })
