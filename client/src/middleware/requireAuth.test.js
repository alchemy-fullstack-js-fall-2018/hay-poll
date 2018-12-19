// import requireAuth, { findAuthToken } from './requireAuth';
// import { HttpError } from './error';


// describe('auth middleware', () => {
//   describe('findAuthToken', () => {
//     it('parses an Authorization header with Bearer', () => {
//       const req = {
//         get: () => 'Authorization: Bearer 1234'
//       };

//       expect(findAuthToken(req)).toEqual('1234');
//     });

//     it('parses an Authorization header with bearer', () => {
//       const req = {
//         get: () => 'Authorization: bearer 1234'
//       };

//       expect(findAuthToken(req)).toEqual('1234');
//     });
//   });

//   describe('requireAuth', () => {
//     const token = require('../utils/auth').tokenize({ testing: '1234' });
//     const req = {
//       get: () => `Authorization: Bearer ${token}`
//     };
//     it('calls the next function', () => {
//       const next = jest.fn();
//       requireAuth(req, {}, next);
//       expect(next).toHaveBeenCalledTimes(1);
//     });

//     it('sets req.user when the token is valid', () => {

//       const next = jest.fn();
//       requireAuth(req, {}, next);
//       expect(next).toHaveBeenCalledWith();
//       expect(req.user).toEqual({ testing: '1234' });
//     });

//     it('calls next with an error', () => {
//       const req = {
//         get: () => 'Authorization: Bearer 1234'
//       };
//       const next = jest.fn();
//       requireAuth(req, {}, next);
//       expect(next).toHaveBeenCalledTimes(1);
//       expect(next).toHaveBeenLastCalledWith(new HttpError({
//         code: 401,
//         message: 'Invalid token'
//       }));
//     });
//   });

// });
