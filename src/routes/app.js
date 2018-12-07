import express from 'express'
import pollsRoutes from './api';

const app = express();
app.use(express.static('client/dist'));

app.use(express.json());

app.use('/api/polls', pollsRoutes);

export default app;
