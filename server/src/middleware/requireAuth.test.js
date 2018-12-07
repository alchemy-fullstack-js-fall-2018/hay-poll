import requireAuth, { findAuthToken } from './requireAuth';

describe('auth middleware', () => {
  describe('find auth token', () => {
    it('strips off everything but token', () => {
      const req = {
        get: () => 'Authorization: Bearer 9876'
      };
      expect(findAuthToken(req)).toEqual('9876');
    })

    it('it strips off auth and bearer regardless of capitalization', () => {
      const req = {
        get: () => 'Authorization: bearer 1234'
      };

      expect(findAuthToken(req)).toEqual('1234');
    });
  })
})