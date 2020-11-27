// action types
export const CHANGE_VALUE = 'CHANGE_VALUE';
export const LOGIN_CHECK = 'LOGIN_CHECK';
export const USER_LOGIN = 'USER_LOGIN';
export const LOGOUT = 'LOGOUT';
export const SAVE_USER = 'SAVE_USER';
export const CHECK_IS_LOGGED = 'CHECK_IS_LOGGED';

// action creators
export const changeValue = (value, name) => ({
  type: CHANGE_VALUE,
  value,
  name,
});

export const loginCheck = () => ({
  type: LOGIN_CHECK,
});

export const userLogin = (iri) => ({
  type: USER_LOGIN,
  iri,
});

export const logout = () => ({
  type: LOGOUT,
});

export const saveUser = (userData) => ({
  type: SAVE_USER,
  userData,
});

export const checkIsLogged = () => ({
  type: CHECK_IS_LOGGED,
});
