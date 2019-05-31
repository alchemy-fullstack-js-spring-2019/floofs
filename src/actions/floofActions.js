import { createAction } from 'promise-middleware-redux';
import { getFloof } from '../services/floofApi';

export const [
  fetchFloof,
  FETCH_FLOOF,
  FETCH_FLOOF_LOADING,
  FETCH_FLOOF_FULFILLED,
  FETCH_FLOOF_ERROR
] = createAction('FETCH_FLOOF', getFloof);
