import { CHANGE_INPUT_VALUE, CHANGE_CHECKBOX } from 'src/actions/register';
import {
  REGISTER_ERROR,
  CLEAR_FORM,
} from '../actions/register';

const initialState = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  passwordConfirm: '',
  streetNumber: '',
  streetName: '',
  zipCode: '',
  city: '',
  country: '',
  tel: '',
  companyName: '',
  website: '',
  streetNumberPro: '',
  streetNamePro: '',
  zipCodePro: '',
  cityPro: '',
  countryPro: '',
  emailPro: '',
  telPro: '',
  producer: false,
  conditionsAgreement: false,
  registerError: [],
};

const register = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_CHECKBOX:
      return {
        ...state,
        [action.target]: action.isChecked,
      };
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        [action.target]: action.currentValue,
      };
    case REGISTER_ERROR:
      console.log('REGISTER_ERROR', state.producer, state.conditionsAgreement, state.password, state.passwordConfirm);
      return {
        ...state,
        registerError: action.errorsArray,
      };
    case CLEAR_FORM:
      return {
        ...state,
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        passwordConfirm: '',
        streetNumber: '',
        streetName: '',
        zipCode: '',
        city: '',
        country: '',
        tel: '',
        companyName: '',
        website: '',
        streetNumberPro: '',
        streetNamePro: '',
        zipCodePro: '',
        cityPro: '',
        countryPro: '',
        emailPro: '',
        telPro: '',
        producer: false,
        conditionsAgreement: false,
        registerError: '',
      };
    default:
      return state;
  }
};

export default register;
