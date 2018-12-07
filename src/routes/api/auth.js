import { Router } from 'express';
import User from '../../models/';
import requireAuth from '../../middleware/requireAuth';
import { HttpError } from '../../middleware/error';

export default Router()
  .post('/auth/signup', (req, res, next) => {
    const { email, password } = req.body;
    User.create({ email, password })
      .then(user => {
        res.setHeader('X-AUTH-TOKEN', user.authToken());
        res.json(user);
      })
      .catch(next);
  })

  .post('/auth/login', (req, res, next) => {
    const { email, password } = req.body;
    User.findOne({ email })
      .then(user => {
        if(!user || !user.compare(password)) next(new HttpError({ code: 401, message: 'Invalid email/password' }));

        res.setHeader('X-AUTH-TOKEN', user.authToken());
        res.json(user);
      })
      .catch(next);
  })

  .get('/auth/verify', requireAuth, (req, res, next) => {
    res.json(req.user)
    .catch(next);
  });
