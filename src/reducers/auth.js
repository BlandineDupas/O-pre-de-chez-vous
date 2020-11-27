import { CHANGE_VALUE, SAVE_USER, LOGOUT } from 'src/actions/auth';

export const initialState = {
  identifiant: '',
  password: '',
  isLogged: false,
  producer: false,
  admin: false,
  user: {},
};

const auth = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SAVE_USER:
      return {
        ...state,
        identifiant: '',
        password: '',
        isLogged: true,
        producer: action.userData.producer,
        admin: false,
        user: {
          id: action.userData.id,
          username: action.userData.username,
          iri: action.userData['@id'],
        },
      };
    case LOGOUT:
      return {
        ...state,
        isLogged: false,
        producer: false,
        admin: false,
        user: {},
      };
    default:
      return state;
  }
};

export default auth;
