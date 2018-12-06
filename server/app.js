import express from 'express';
import morgan from 'morgan';
import routes from './routes';
import cors from './middleware/cors';
import spa from './middleware/spa';
import { errorHandler } from './middleware/error';

const app = express();

app.use(morgan('dev', {
  skip() {
    return process.env.NODE_ENV === 'test';
  }
}));

app.use(express.static('client/dist'));

app.use(express.json());

app.use('/api', routes);

app.use('*', spa('/client/dist/index.html'));

app.use(errorHandler);

export default app;
