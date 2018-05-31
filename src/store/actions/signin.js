import HttpService from 'services/http'
import { setStoredAuth } from 'services/stored_auth';

export const AUTHENTICATED = 'authenticated_user';
export const UNAUTHENTICATED = 'unauthenticated_user';
export const AUTHENTICATION_ERROR = 'authentication_error';

export function signInAction({ email, password }, history) {
  return async (dispatch) => {
    try {
      const res = await HttpService.post(`auth/sign_in`, { email, password });

      dispatch({ type: AUTHENTICATED, payload: res.data.data });
      setStoredAuth(res.headers['access-token'], res.headers['uid'], res.headers['client'])

      history.push('/');
    } catch(error) {
      console.warn(error)
      dispatch({
        type: AUTHENTICATION_ERROR,
        payload: 'Invalid email or password'
      });
    }
  };
}

export function signOutAction() {
  localStorage.clear();
  return {
    type: UNAUTHENTICATED
  };
}