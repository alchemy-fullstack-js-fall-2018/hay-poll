import { untokenize } from '../utils/auth';
import { HttpError } from './error';

export const findAuthToken = req => {
  const header = req.get('Authorization');
  if(header) return header.replace(/Bearer\s*/i, '');
  return null;
};

export default (req, res, next) => {
  const token = findAuthToken(req);
  if(!token) return next(new HttpError({ code: 401, message: 'Token required' }));

  try {
    const user = untokenize(token);
    req.user = user;
    next();
  } catch(e) {
    next(new HttpError({ code: 403, message: 'Invalid token' }));
  }
};
