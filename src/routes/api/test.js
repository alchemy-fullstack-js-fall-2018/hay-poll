import { Router } from 'express';

export default Router()

  .get('/', (req, res) => {
    res.json({ greeting: 'Howdy' });
  });
