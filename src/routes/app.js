import express from 'express'
import pollsRoutes from './api/polls';

const app = express();

app.use(express.json());

app.use('/api/polls', pollsRoutes);

export default app;
