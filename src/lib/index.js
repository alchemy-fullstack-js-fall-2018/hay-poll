import { config } from 'dotenv';
import connect from './utils/connect';
import { createServer } from 'http';
import app from './routes/app';

config();
connect();

const port = process.env.PORT || 7888;

const server = createServer(app);

server.listen(port, () => {
  /* eslint-disable-next-line no-console */
  console.log(`Listening on ${port}`);
});
