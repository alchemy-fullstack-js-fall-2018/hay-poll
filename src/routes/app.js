import morgan from 'morgan';
import express from 'express';
import apiRoutes from './api';
import { errorHandler } from '../middleware/error';
// import spa from '../middleware/spa';

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/api', apiRoutes);

app.use(errorHandler);

export default app;

