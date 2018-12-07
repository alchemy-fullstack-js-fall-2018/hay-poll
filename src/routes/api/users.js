import { Router } from 'express';
import User from '../../models/User';
import { HttpError } from '../../middleware/error';
import requireAuth from '../../middleware/requireAuth';

export default Router()
  .post('/users/signup', (req, res, next) => {
    const { email, password } = req.body;
    User.create({ email, password })
      .then(user => res.json(user))
      .catch(next);
  })

  .post('/users/login', (req, res, next) => {
    const { email, password } = req.body;
    User.findOne({ email })
      .then(user => {
        if(!user.compare(password)) return next(new HttpError({ code: 401, message: 'Invalid email/password' }));
        const authToken = user.authToken();
        res.setHeader('X-AUTH-TOKEN', authToken);
        res.json(user);
      })
      .catch(next);
  })

  .get('/users/verify', requireAuth, (req, res, next) => {
    res.json(req.user);
  });
