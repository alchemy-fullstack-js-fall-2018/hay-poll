import { untokenize } from '../utils/auth';
import { HttpError } from './error';

export const findAuthToken = req => {
  const header = req.get('Authorization');
  if(header) return header.replace(/Authorization: Bearer /i, '');
  return null;
};