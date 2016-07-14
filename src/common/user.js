import {login} from '../services/user';

export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const RECEIVE_LOGIN = 'RECEIVE_LOGIN';
export const LOGOUT = 'LOGOUT';

export function requestLogin() {
  return {
    type: REQUEST_LOGIN
  };
}

export function receiveLogin(response) {
  return {
    type: RECEIVE_LOGIN,
    profile: response.data,
    error: response.error
  };
}

export function initiateLogin(email, password) {
  // redux-thunk at work here!
  return dispatch => {
    dispatch(requestLogin());
    return login(email, password)
      .then(json => dispatch(receiveLogin({data: json})))
      .catch(error => dispatch(receiveLogin({error: error})));
  }
}

export function logout() {
  return {
    type: LOGOUT
  };
}
