import { post, get } from '../lib/request';

const AUTH_API = '/api/auth';

export const signup = ({ email, password }) => {
  return post(`${AUTH_API}/signup`, { email, password });
};

export const login = ({ email, password }) => {
  return post(`${AUTH_API}/login`, { email, password });
};

export const verifySession = () => {
  return get(`${AUTH_API}/verify`);
};
