import { SAVE_GEOMETRY, CLEAR_GEOMETRY } from 'src/actions/carte';

const initialState = {
  query: '',
  // apikey: '75baff71e0ed44118b28695bad0980fe',
  apikey: '7fc2d86ee1bf4330a5d31b341c5cb7a1',
  // apikey: '1e03c4fdabc24e54a188f33bec60e023',
  geometry: [],
};

const carte = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_GEOMETRY:
      return {
        ...state,
        geometry: action.geometry,
      };
    case CLEAR_GEOMETRY:
      return {
        ...state,
        geometry: [],
      };
    default:
      return state;
  }
};

export default carte;
