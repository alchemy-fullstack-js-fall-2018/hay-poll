import Vote from '../../models/Vote';
import { Router } from 'express';

export default Router()
  .post('/', (req, res, next) => {
    const { poll } = req.params;
    const { option, user } = req.body;

    Vote.create({ poll, option, user })
      .then(vote => res.json(vote))
      .catch(next);
  });
