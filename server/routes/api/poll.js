import { Router } from 'express';
import Poll from '../../models/Poll';
import Vote from '../../models/Vote';

export default Router()
  .post('/polls', (req, res, next) => {
    const { title, description, choices } = req.body;
    Poll.create({ title, description, choices })
      .then(poll => res.json(poll))
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
  })

  .post('/polls/:id/votes', (req, res, next) => {
    const { poll, selection } = req.body;
    Vote.create({ poll, selection })
      .then(vote => res.json(vote))
      .catch(next);
  });
