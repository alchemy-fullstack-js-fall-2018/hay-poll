require('dotenv').config();
require('./utils/connect')();
const { createServer } = require('http');
const app = require('./routes/app');

const port = process.env.PORT || 7888;

const server = createServer(app);

server.listen(port, () => {
  /* eslint-disable-next-line no-console */
  console.log(`Listening on ${port}`);
});