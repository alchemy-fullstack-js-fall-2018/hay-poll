import { Router } from 'express';
import Poll from '../../models/Poll';

export default Router()
  .post('/polls', (req, res, next) => {
    const { title, description, choices } = req.body;
    Poll.create({ title, description, choices })
      .then(poll => res.json(poll))
      .catch(next);
  })

  .get('/polls', (req, res, next) => {
    Poll.find()
      .lean()
      .then(poll => res.json(poll))
      .catch(next);

  });
