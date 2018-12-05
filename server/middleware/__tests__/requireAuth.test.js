import requireAuth, { findAuthToken } from '../requireAuth';
import { HttpError } from '../error';


describe('auth middleware', () => {

  describe('findAuthToken', () => {
    test('parses an Authorization header with Bearer', () => {
      const req = {
        get: () => 'Authorization: Bearer 1234'
      };

      expect(findAuthToken(req)).toEqual('Authorization: 1234');
    });

    test('parses an Authorization header with bearer', () => {
      const req = {
        get: () => 'Authorization: bearer 1234'
      };

      expect(findAuthToken(req)).toEqual('Authorization: 1234');
    });
  });

  describe('requireAuth', () => {
    const token = require('../../utils/auth').tokenize({ testing: '1234' });
    const req = {
      get: () => `Bearer ${token}`
    };
    test('calls the next function', () => {
      const next = jest.fn();
      requireAuth(req, {}, next);
      expect(next).toHaveBeenCalledTimes(1);
    });

    test('sets req.user when the token is valid', () => {
      const next = jest.fn();
      requireAuth(req, {}, next);
      expect(next).toHaveBeenCalledWith();
      expect(req.user).toEqual({ testing: '1234' });
    });

    test('calls next with an error', () => {
      const req = {
        get: () => 'Bearer 1234'
      };
      const next = jest.fn();
      requireAuth(req, {}, next);
      expect(next).toHaveBeenCalledTimes(1);
      expect(next).toHaveBeenLastCalledWith(new HttpError({
        code: 401,
        message: 'Invalid token'
      }));
    });
  });

});
