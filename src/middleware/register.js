import axios from 'axios';
import {
  REGISTER_SUBMIT,
  REGISTER_PRODUCER_SUBMIT,
  registerError,
  clearForm,
} from 'src/actions/register';

const baseUriAPI = 'http://52.207.229.243';
const registerErrorsArray = [];

const register = (store) => (next) => (action) => {
  switch (action.type) {
    case REGISTER_SUBMIT:
      console.log('REGISTER_SUBMIT');

      // if (store.getState().register.password !== store.getState().register.passwordConfirm) {
      //   registerErrorsArray.push('La confirmation du mot de passe ne correspond pas au mot de passe choisi');
      // }

      // if (!store.getState().register.conditionsAgreement) {
      //   registerErrorsArray.push('Vous devez accepter les conditions d\'utilisation');
      // }

      // if (store.getState().register.password.length < 3) {
      //   registerErrorsArray.push('Le mot de passe doit faire au moins 4 caractères');
      // }

      if (Array.isArray(registerErrorsArray) && registerErrorsArray.length > 0) {
        store.dispatch(registerError(registerErrorsArray));
      }
      else {
        console.log('submit ok');
        axios.post(`${baseUriAPI}/api/users`, {
          username: store.getState().register.firstname.toLowerCase(),
          firstname: store.getState().register.firstname,
          lastname: store.getState().register.lastname,
          email: store.getState().register.email,
          password: store.getState().register.password,
          phone: store.getState().register.tel,
          producer: store.getState().register.producer,
          companyPro: store.getState().register.companyName,
          websitePro: store.getState().register.website,
          siretPro: store.getState().register.siretPro,
          streetNumberPro: store.getState().register.streetNumberPro,
          streetNamePro: store.getState().register.streetNamePro,
          zipCodePro: store.getState().register.zipCodePro,
          cityPro: store.getState().register.cityPro,
          countryPro: store.getState().register.countryPro,
          emailPro: store.getState().register.emailPro,
          phonePro: store.getState().register.telPro,
          image: 'http://lorempixel.com/640/480',
          imagePro: 'http://lorempixel.com/640/480',
        },
        { 'Content-Type': 'application/json' })
          .then ((response) => store.dispatch(clearForm()))
          .catch((error) => console.log(error));
      }
      break;
    case REGISTER_PRODUCER_SUBMIT:
      console.log('REGISTER_PRODUCER_SUBMIT');

      if (!store.getState().register.conditionsAgreement) {
        registerErrorsArray.push('Vous devez accepter les conditions d\'utilisation');
      }

      if (Array.isArray(registerErrorsArray) && registerErrorsArray.length > 0) {
        store.dispatch(registerError(registerErrorsArray));
      }
      else {
        console.log('submit producer register ok');
        axios.put(`${baseUriAPI}/api/users/${store.getState().auth.user.id}`, {
          producer: true,
          companyPro: store.getState().register.companyName,
          websitePro: store.getState().register.website,
          siretPro: store.getState().register.siretPro,
          streetNumberPro: store.getState().register.streetNumberPro,
          streetNamePro: store.getState().register.streetNamePro,
          zipCodePro: store.getState().register.zipCodePro,
          cityPro: store.getState().register.cityPro,
          countryPro: store.getState().register.countryPro,
          emailPro: store.getState().register.emailPro,
          phonePro: store.getState().register.telPro,
          imagePro: 'http://lorempixel.com/640/480',
        },
        {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${sessionStorage.jwt}`,
        })
          .then ((response) => store.dispatch(clearForm()))
          .catch((error) => console.log(error));
      }
      break;
    default:
      next(action);
  }
};

export default register;
