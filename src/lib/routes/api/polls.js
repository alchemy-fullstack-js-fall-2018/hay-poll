import Poll from '../../models/Poll';
import Vote from '../../models/Vote';
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
  })

  .post('/:poll/votes', (req, res, next) => {
    const { poll } = req.params;
    const { option, user } = req.body;

    Vote.create({ poll, option, user })
      .then(vote => res.json(vote))
      .catch(next);
  })

  .post('/', (req, res, next) => {
    const { poll } = req.params;
    const { option, user } = req.body;

    Vote.create({ poll, option, user })
      .then(vote => res.json(vote))
      .catch(next);
  })

  .get('/:id/results', (req, res, next) => {
    const { id } = req.params;
    
    
  });
