import express from 'express';
import apiRoutes from './routes/api';
import cors from './middleware/cors';
import spa from './middleware/spa';

const app = express();

app.use(express.static('client/dist'));

app.use(express.json());

app.use('/api', apiRoutes);

// app.use('*', spa('/client/dist/index.html'));

export default app;
