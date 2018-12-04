import { Router } from 'express';
import Poll from '../../models/Poll';

export default Router()
  .post('/polls', (req, res, next) => {
    const { title, options } = req.body;

    Poll.create({ title, options })
      .then(poll => res.json(poll))
      .catch(next);
  });

