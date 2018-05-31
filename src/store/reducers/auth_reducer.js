import { AUTHENTICATED, UNAUTHENTICATED, AUTHENTICATION_ERROR } from '../actions/signin';
import { REGISTRATION_ERROR } from '../actions/register';

export default function(state={}, action) {
  switch(action.type) {
    case AUTHENTICATED:
      return { ...state, user: action.payload };
    case UNAUTHENTICATED:
      return { ...state, user: null };
    case AUTHENTICATION_ERROR:
      return { ...state, user: null, error: action.payload };
    case REGISTRATION_ERROR:
      return { ...state, user: null, error: action.payload };
  }
  return state;
}