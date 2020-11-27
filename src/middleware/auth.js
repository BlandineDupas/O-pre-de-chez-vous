import axios from 'axios';

// Local import
import {
  LOGIN_CHECK,
  userLogin,
  USER_LOGIN,
  LOGOUT,
  saveUser,
} from 'src/actions/auth';

const baseUriAPI = 'http://52.207.229.243';

const auth = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN_CHECK:
      // console.log('LOGIN');
      axios.post(
        `${baseUriAPI}/api/login_check`,
        {
          username: store.getState().auth.identifiant,
          password: store.getState().auth.password,
        },
        { 'Content-Type': 'application/json' },
      )
        .then((response) => {
          // console.log(response);
          sessionStorage.setItem('jwt', response.data.token);
          // console.log(sessionStorage.jwt);
          store.dispatch(userLogin(response.data.data.iri));
        })
        .catch((error) => console.log(error));
      break;
    case USER_LOGIN:
      // console.log('USER_LOGIN');
      // console.log(sessionStorage.jwt);
      axios.get(
        `${baseUriAPI}${action.iri}`,
        {},
        {
          // Authorization: `Bearer ${sessionStorage.jwt}`,
          'Content-Type': 'application/json',
        },
      )
        .then((response) => {
          // console.log(response);
          store.dispatch(saveUser(response.data));
        })
        .catch((error) => console.log(error));
      break;
    case LOGOUT:
      sessionStorage.removeItem('jwt');
      next(action);
      break;
    default:
      next(action);
  }
};

export default auth;
