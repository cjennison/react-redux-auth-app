import { AUTHENTICATED } from '../store/actions/signin'
import HttpService from 'services/http'

const LOCAL_AUTH_KEY = 'auth'

export async function validateToken(store) {
  let auth = getStoredAuth()

  if (auth) {
    console.log("[Auth] Found auth, attempting to remote authenticate")

    const res = await HttpService.get('auth/validate_token', {
      'access-token': auth.accessToken,
      'uid': auth.uid,
      'client': auth.client
    });

    store.dispatch({ type: AUTHENTICATED, payload: res.data.data });
  } else {
    console.warn("[Auth] No stored authentication available")
  }
}

export function setStoredAuth(accessToken, uid, client) {
  const auth = { accessToken, uid, client }
  localStorage.setItem(LOCAL_AUTH_KEY, JSON.stringify(auth))
}

export function getStoredAuth() {
  let auth = localStorage.getItem(LOCAL_AUTH_KEY);

  if (auth) {
    return JSON.parse(auth)
  }
}