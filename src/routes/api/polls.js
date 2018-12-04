import { Router } from 'express';
import Poll from '../../models/Poll';
import Vote from '../../models/Vote';

export default Router()
  .post('/polls', (req, res, next) => {
    const { title, options } = req.body;

    Poll.create({ title, options })
      .then(poll => res.json(poll))
      .catch(next);
  })

  .get('/polls', (req, res, next) => {
    Poll
      .find()
      .lean()
      .then(polls => res.json(polls))
      .catch(next);
  })
  .get('/polls/:id', (req, res, next) => {
    const { id } = req.params;

    Poll.findById(id)
      .then(poll => res.json(poll))
      .catch(next);
  })
  .post('/polls/:id/votes', (req, res, next) => {
    const { pollId, votes } = req.body;
    Vote.create({ pollId, votes })
      .then(vote => res.json(vote))
      .catch(next);

  });

