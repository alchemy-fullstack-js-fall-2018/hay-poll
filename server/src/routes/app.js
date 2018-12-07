import express from 'express';
import apiRoutes from './api';
import morgan from 'morgan';
import spa from '../middleware/spa';
import error from '../middleware/error';

const app = express();

app.use(morgan('dev', {
  skip() {
    return process.env.NODE_ENV === 'test';
  }
}));

app.use(express.static('client/dist'));

app.use(express.json());

app.use('/api', apiRoutes);

app.use('*', spa('/client/dist/index.html'));

app.use(error);

export default app;
