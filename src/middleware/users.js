import axios from 'axios';

import {
  FETCH_USER,
  saveItineraryUser,
  FETCH_PROFILE_USER,
  saveProfileUser,
  fetchUserItinerary,
} from 'src/actions/users';

const baseUriAPI = 'http://52.207.229.243';

const users = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_USER:
      axios.get(`${baseUriAPI}${action.iri}`, {}, { 'Content-Type': 'application/json' })
        .then((response) => {
            // console.log('USER :', response);
        store.dispatch(saveItineraryUser(response.data));
        })
        .catch((error) => console.log(error));
    break;
    case FETCH_PROFILE_USER:
      axios.get(`${baseUriAPI}/api/users/${action.id}`, {}, { 'Content-Type': 'application/json' })
        .then((response) => {
            // console.log('PrivateProfileUSER :', response);
          store.dispatch(saveProfileUser(response.data));
          store.dispatch(fetchUserItinerary(response.data.itineraries));
        })
        .catch((error) => console.log(error));
    break;
    default:
      next(action);
  }
};
  
export default users;
