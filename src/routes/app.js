import express from 'express'
import pollsRoutes from './api/Polls';

const app = express();

app.use(express.json());

app.use('/api/polls', pollsRoutes);

export default app;
