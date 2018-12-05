import store from '../store';
import { updateSessionToken } from '../actions/session';

let token = window.localStorage.getItem('token');

store.subscribe(() => {
  token = window.localStorage.getItem('token');
});

const setToken = token => {
  store.dispatch(updateSessionToken(token));
  window.localStorage.setItem('token', token);
};

export const get = url => {
  return fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
    .then(res => res.json());
};

export const post = (url, body) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(body)
  })
    .then(res => {
      const headerToken = res.headers.get('X-AUTH-TOKEN');
      if(headerToken !== token) setToken(headerToken);
      if(token) {
        window.localStorage.setItem('token', token);
      }
      return res.json();
    });
};
