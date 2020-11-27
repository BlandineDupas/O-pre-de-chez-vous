import axios from 'axios';

import {
  ADD_ITINERARY_SUBMIT,
  clearAddItinerary,
  saveItineraryAdd,
} from 'src/actions/itineraryAdd';

const baseUriAPI = 'http://52.207.229.243';


const itineraryAdd = (store) => (next) => (action) => {
  switch (action.type) {
    case ADD_ITINERARY_SUBMIT:
      axios.post(`${baseUriAPI}/api/itineraries`, {
        departureAddress: store.getState().itineraryAdd.departureCity,
        arrivalAddress: store.getState().itineraryAdd.arrivalCity,
        dateDeparture: store.getState().itineraryAdd.departureDate,
        dateArrival: store.getState().itineraryAdd.arrivalDate,
        user: [store.getState().auth.user.iri],
        description: store.getState().itineraryAdd.description,
        // aroundAccepted: store.getState().itineraryAdd.aroundAccepted,
      },
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.jwt}`,
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          store.dispatch(clearAddItinerary());
        })
        .catch((error) => console.log(error));
      break;
    default:
      next(action);
  }
};

export default itineraryAdd;
