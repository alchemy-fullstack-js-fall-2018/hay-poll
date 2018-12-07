import { config } from 'dotenv';
import connect from './utils/connect';
import app from './routes/app';

config();
connect();

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
  console.log('RUNNING on', PORT)
});
