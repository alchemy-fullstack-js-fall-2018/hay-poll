import express from 'express';
import pollsRoutes from './api/polls';
const { handler } = require('../utils/errors');

const app = express();

app.use(express.json());

app.use('/api/polls', pollsRoutes);
app.use(handler);

export default app;
