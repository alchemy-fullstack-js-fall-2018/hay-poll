export const get = url => {
  return fetch(url)
    .then(res => res.json());
};

export const post = (url, body) => {
  return fetch(url, body)
    .then(res => res.json());
};
