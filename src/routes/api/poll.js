import { router } from 'express';
import Poll from '../../models/Poll';

export default router()
  .post('/polls', (req, res, next) => {
    const { title, description, choices } = req.body;
    Poll.create({ title, description, choices })
      .then(poll => res.json(poll))
      .catch(next);
  })

  .get('/polls', (req, res, next) => {


  });
