import reducer from './polls';
import { FETCH_POLLS } from '../actions/polls';
import { getPolls } from '../services/pollsApi';


jest.mock('../services/pollsApi.js');

describe('polls reducer', () => {
  const state = {
    loading: false,
    list: [
      {
        title: 'poll1',
        candidates: [
          { name: 'Alf' },
          { name: 'Rich' },
          { name: 'Brunhilde' }
        ]
      },
      {
        title: 'poll2',
        candidates: [
          { name: 'Cedric' },
          { name: 'Parvati' },
          { name: 'Remus' }
        ]
      },
      {
        title: 'poll3',
        candidates: [
          { name: 'Cletus' },
          { name: 'Rev. Lovejoy' },
          { name: 'Hans Moleman' }
        ]
      }
    ],
    details: null
  };

  it('returns the initial state', () => {
    const newState = reducer(state, {});
    expect(newState).toEqual(state);
  });

  it('accepts FETCH_POLLS actions', () => {
    const action = { type: FETCH_POLLS, payload: getPolls() };
    const newState = reducer(state, action);

    expect(newState).toEqual({
      loading: false,
      list: [
        {
          title: 'poll one',
          candidates: [
            {
              name: 'ham'
            },
            {
              name: 'jam'
            }
          ]
        },
        {
          title: 'poll two',
          candidates: [
            {
              name: 'lamb'
            },
            {
              name: 'spam'
            }
          ]
        }
      ],
      details: null
    });
  });
});
