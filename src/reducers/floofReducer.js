import { FETCH_FLOOF, FETCH_FLOOF_LOADING } from '../actions/floofActions';

const initialState = {
  detail: {},
  loading: true,
  error: null
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_FLOOF:
      return { ...state, detail: payload, loading: false };
    case FETCH_FLOOF_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
}
