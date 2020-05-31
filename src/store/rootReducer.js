import {FETCH} from './actions';

export function rootReducer(state, action) {
  if (action.type === FETCH.type) {
    return {
      response: {...action.data},
      profile: {...action.params}
    };
  }
  return state;
}

