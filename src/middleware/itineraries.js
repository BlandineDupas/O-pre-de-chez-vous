import axios from 'axios';

import {
  FETCH_ITINERARIES,
  saveItineraries,
  SEARCH_ITINERARIES,
  FETCH_ITINERARY,
  saveItinerary,
  clearItineraries,
  FETCH_HOME_ITINERARIES,
  saveItinerariesUser,
  FETCH_ITINERARY_USER,
} from 'src/actions/itineraries';

import { fetchUser, FETCH_USER_ITINERARY, saveUserItinerary } from 'src/actions/users';

import { clearGeometry } from 'src/actions/carte';

import { navUnsubmit } from 'src/actions/nav';

const baseUriAPI = 'http://52.207.229.243';

const itineraries = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_ITINERARIES:
      store.dispatch(clearItineraries());
      store.dispatch(clearGeometry());
      axios.get(`${baseUriAPI}/api/itineraries`, {params: {
        state: 'active',
        'order[dateDeparture]': 'asc',
      } }, { 'Content-Type': 'application/json' })
        .then((response) => {
          // console.log(response.data['hydra:member']);
          store.dispatch(saveItineraries(response.data['hydra:member']));
        })
        .catch((error) => console.log(error));
      break;
    case SEARCH_ITINERARIES:
      store.dispatch(clearItineraries());
      store.dispatch(clearGeometry());

      // console.log('SEARCH : ', store.getState().itineraries.inputValue);
      axios.get(`${baseUriAPI}/api/itineraries`, { params: {
        departureAddress: store.getState().itineraries.inputValue,
        state: 'active',
        'order[dateDeparture]': 'asc',
      }}, { 'Content-Type': 'application/json' })
        .then((response) => {
          // console.log(response.data['hydra:member']);
          store.dispatch(saveItineraries(response.data['hydra:member']));
        })
        .catch((error) => console.log(error));
      axios.get(`${baseUriAPI}/api/itineraries`, { params: {
        arrivalAddress: store.getState().itineraries.inputValue,
        state: 'active',
        'order[dateDeparture]': 'asc',
      }}, { 'Content-Type': 'application/json' })
        .then((response) => {
          // console.log(response.data['hydra:member']);
          store.dispatch(saveItineraries(response.data['hydra:member']));
          store.dispatch(navUnsubmit());
        })
        .catch((error) => console.log(error));
      break;
    case FETCH_ITINERARY:
      axios.get(`${baseUriAPI}/api/itineraries/${action.id}`, {}, { 'Content-Type': 'application/json' })
        .then((response) => {
          // console.log(response.data.user[0]);
          store.dispatch(saveItinerary(response.data));
          store.dispatch(fetchUser(response.data.user[0]));
        })
        .catch((error) => console.log(error));
      break;
    case FETCH_USER_ITINERARY:
      store.dispatch(clearItineraries());
      axios.get(`${baseUriAPI}/api/itineraries`, { params: {
        'user.id': action.id,
        state: 'active',
        'order[dateDeparture]': 'asc',
      } })
        .then((response) => {
          // console.log('ItineraryUser:', response);
          store.dispatch(saveItineraries(response.data['hydra:member']));
        })
        .catch((error) => console.log(error));
      break;
    case FETCH_HOME_ITINERARIES:
      store.dispatch(clearItineraries());
      axios.get(`${baseUriAPI}/api/itineraries`, { params: {
        itemsPerPage: 3,
        'order[dateDeparture]': 'asc',
        state: 'active',
      }}, { 'Content-Type': 'application/json' })
        .then((response) => {
          store.dispatch(saveItineraries(response.data['hydra:member']));
        })
        .catch((error) => console.log(error));
      break;
    case FETCH_ITINERARY_USER:
    // console.log(action.userIriArray[0]);
      axios.get(`${baseUriAPI}${action.userIriArray[0]}`)
        .then((response) => {
          store.dispatch(saveItinerariesUser(response.data, action.itineraryId));
        })
        .catch((error) => console.log(error));
      break;
    default:
      next(action);
  }
};

export default itineraries;
