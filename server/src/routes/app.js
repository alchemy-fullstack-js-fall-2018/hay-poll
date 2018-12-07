import express from 'express';
import pollsRoutes from './api/polls';
import morgan from 'morgan';

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use('/api/polls', pollsRoutes);

export default app;
