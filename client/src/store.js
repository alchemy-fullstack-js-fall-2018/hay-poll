import { createStore, compose, applyMiddleware } from 'redux';
import reducers from './reducers';
import { middleware } from './middleware';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducers,
  composeEnhancer(
    applyMiddleware(
      ...middleware
    )
  )
);
