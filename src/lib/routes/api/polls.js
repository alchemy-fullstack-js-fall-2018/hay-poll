import Poll from '../../models/Poll';
import { Router } from 'express';

export default Router().post('/', (req, res, next) => {
  const { title, option } = req.body;

  Poll.create({ title, option })
    .then(poll => res.json(poll))
    .catch(next);
});
