import app from './app';
import { config } from 'dotenv';
import connect from './utils/connect';

config();
connect();

const PORT = process.env.PORT || 7890;
app.listen(PORT, () => {
  console.log('Running on', PORT); // eslint-disable-line no-console
});
