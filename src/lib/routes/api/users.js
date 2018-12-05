import User from '../../models/User';
import { Router } from 'express';
import { HttpError } from '../../utils/errors';
import ensureAuth from '../../utils/auth/ensure-auth';

export default Router().post('/', (req, res, next) => {
  const { email, password } = req.body;

  User.create({ email, password })
    .then(user => res.json(user))
    .catch(next);
});
