import { createStore, applyMiddleware } from 'redux';
import { promiseMiddleware } from 'promise-middleware-redux';
import reducer from './reducers';

export default createStore(
  reducer,
  applyMiddleware(promiseMiddleware)
);
