import { Router } from 'express';
import User from '../../models/User';
import requireAuth from '../../middleware/requireAuth';
import { HttpError } from '../../middleware/error';

export default Router()
  .post('/auth/signup', (req, res, next) => {
    const { email, password } = req.body;
    console.log(email);
    User.create({ email, password })
      .then(user => {
        res.setHeader('X-AUTH-TOKEN', user.authToken());
        res.json(user);
      })
      .catch(next);
  })
