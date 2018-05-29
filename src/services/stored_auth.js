import { AUTHENTICATED } from '../store/actions/signin'
const LOCAL_AUTH_KEY = 'auth'

export function getStoredAuth(store) {
  const auth = localStorage.getItem(LOCAL_AUTH_KEY);

  if (auth) {
    store.dispatch({ type: AUTHENTICATED });
  } else {
    console.warn("[Auth] No stored authentication available")
  }
}