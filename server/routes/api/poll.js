import { Router } from 'express';
import Poll from '../../models/Poll';
import Vote from '../../models/Vote';
import requireAuth from '../../middleware/requireAuth';

export default Router()
  .post('/polls', requireAuth, (req, res, next) => {
    const { title, description, choices } = req.body;
    Poll.create({ title, description, choices })
      .then(poll => res.json(poll))
      .catch(next);
  })

  .post('/polls/:id/votes', requireAuth, (req, res, next) => {
    const { poll, selection } = req.body;
    Vote.create({ poll, selection })
      .then(vote => res.json(vote))
      .catch(next);
  })

  .get('/polls/:id/results', (req, res, next) => {
    const { id } = req.params;
    Poll.findById(id)
      .then(poll => poll.results())
      .then(results =>res.json(results))
      .catch(next);
  })

  .get('/polls/:id', (req, res, next) => {
    const { id } = req.params;
    Poll.findById(id)
      .lean()
      .then(poll => res.json(poll))
      .catch(next);
  })

  .get('/polls', (req, res, next) => {
    Poll.find()
      .lean()
      .then(polls => res.json(polls))
      .catch(next);
  });
