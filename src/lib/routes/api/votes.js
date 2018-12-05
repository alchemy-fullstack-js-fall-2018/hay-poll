import Vote from '../../models/Vote';
import { Router } from 'express';

export default Router()
  .post('/:id/votes', (req, res, next) => {
    const { pollId } = req.params;
    const { optionId, userId } = req.body;

    Vote.create({ pollId, optionId, userId })
      .then(vote => res.json(vote))
      .catch(next);
  });
