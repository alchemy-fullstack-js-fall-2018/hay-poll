import Poll from '../../models/Poll';
import { Router } from 'express';

export default Router()
  .post('/', (req, res, next) => {
    const { title, options } = req.body;

    Poll.create({ title, options })
      .then(poll => res.json(poll))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    Poll.find()
      .lean()
      .then(polls => res.json(polls))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    const {id} = req.params;

    Poll.findById(id)
      .then(poll => res.json(poll))
      .catch(next);
  });
