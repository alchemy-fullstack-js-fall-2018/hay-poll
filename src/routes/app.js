import express from 'express';
import pollRoutes from './api/polls';

const app = express();

app.use(express.json());
app.use('/api/polls', pollRoutes);

export default app;