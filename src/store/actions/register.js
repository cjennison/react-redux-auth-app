import HttpService from 'services/http'
import { setStoredAuth } from 'services/stored_auth';
import { AUTHENTICATED } from './signin';

export const REGISTRATION_ERROR = 'registration_error';

export function registerAction({ email, password, password_confirmation }, router) {
  return async (dispatch) => {
    try {
      const res = await HttpService.post(`auth`, { email, password, password_confirmation });
      dispatch({ type: AUTHENTICATED, payload: res.data.data });
      setStoredAuth(res.headers['access-token'], res.headers['uid'], res.headers['client'])

      router.push('/');
    } catch(error) {
      dispatch({
        type: REGISTRATION_ERROR,
        payload: error
      });
    }
  };
}
