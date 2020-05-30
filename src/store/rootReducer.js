import {FETCH} from './actions';

export function rootReducer(state, action) {
  if (action.type === FETCH.type) {
    const data = action.data;
    const object = action.object;
    return {
      ...data,
      ...object
    };
  }
  return state;
}

