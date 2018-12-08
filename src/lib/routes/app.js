import express from 'express';
import pollsRoutes from './api/polls';
import usersRoutes from './api/users';
import morgan from 'morgan';
const { handler } = require('../utils/errors');

const app = express();

app.use(morgan('dev'));

app.use(express.json());

app.use('/api/polls', pollsRoutes);
app.use('/api/users', usersRoutes);
app.use(handler);

export default app;
