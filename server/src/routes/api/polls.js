import { Router } from 'express';
import Poll from '../../models/Poll';

export default Router()
  .get('/', (req, res) => {
    Poll
      .find()
      .lean()
      .then(polls => res.json(polls));
  })

  .get('/:id', (req, res) => {
    const { id } = req.params;
    Poll.findById(id)
      .then(poll => {
        res.json(poll);
      });
  })

  .post('/', (req, res, next) => {
    const { title, candidates } = req.body;

    Poll.create({ title, candidates })
      .then(poll => res.json(poll))
      .catch(next);
  })
