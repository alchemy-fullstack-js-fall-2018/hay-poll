import express from 'express';
import pollsRoutes from './api/polls';
import usersRoutes from './api/users';
import authRoutes from './api/auth';
import morgan from 'morgan';
const { handler } = require('../utils/errors');

const app = express();

app.use(
  morgan('dev', {
    skip() {
      return process.env.NODE_ENV === 'test';
    }
  })
);

app.use(express.static('client/dist'));

app.use(express.json());

app.use('/api/polls', pollsRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/auth', authRoutes);

app.use(handler);

export default app;
