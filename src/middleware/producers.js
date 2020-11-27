import axios from 'axios';

import {
  FETCH_PRODUCERS,
  saveProducers,
  SEARCH_PRODUCERS,
  FETCH_PRODUCER,
  saveProducer,
  fetchAddressPro,
  FETCH_ADDRESS_PRO,
  saveAddressPro,
  clearProducers,
  saveAddressesPro,
  FETCH_ADDRESSES_PRO,
  FETCH_HOME_PRODUCERS,
} from 'src/actions/producers';

import {
  fetchProducts,
} from 'src/actions/products';

import { fetchGeometry, clearGeometry } from 'src/actions/carte';

import { navUnsubmit } from 'src/actions/nav';

const baseUriAPI = 'http://52.207.229.243';

const producers = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_PRODUCERS:
      // Clear producers
      store.dispatch(clearProducers());
      store.dispatch(clearGeometry());
      // Fetch producers
      axios.get(`${baseUriAPI}/api/users`, { params: {
        producer: true,
      }}, { 'Content-Type': 'application/json' })
        .then((response) => {
          // console.log(response.data['hydra:member']);
          store.dispatch(saveProducers(response.data['hydra:member']));
        })
        .catch((error) => console.log(error));
      break;
    case SEARCH_PRODUCERS:
      // console.log(SEARCH_PRODUCERS);
      // Clear producers before search
      store.dispatch(clearProducers());
      store.dispatch(clearGeometry());
      // Search by company name
      axios.get(`${baseUriAPI}/api/users`, {
        params: {
          producer: true,
          companyPro: store.getState().producers.inputValue,
        },
      }, { 'Content-Type': 'application/json' })
        .then((response) => {
          // console.log(response.data);
          const producersList = response.data['hydra:member'];
          producersList.forEach((producer) => {
            producer['@context'] = response.data['@context'];
            // console.log(producer['@context']);
        });
        // console.log(producersList);
          store.dispatch(saveProducers(producersList));
          store.dispatch(navUnsubmit());
        })
        .catch((error) => console.log(error));
      // Search by tag name
      // Clear geometries again
      store.dispatch(clearGeometry());

      axios.get(`${baseUriAPI}/api/tags`, {
        params: {
          name: store.getState().producers.inputValue,
        },
      }, { 'Content-Type': 'application/json' })
        .then((response) => {
          // Receive tags
          // console.log(response.data['hydra:member']);
          response.data['hydra:member'].forEach((tag) => {
            // fo each tag, and then each producer linked to the tag, we search user's data
            tag.users.forEach((producerIri) => {
              axios.get(`${baseUriAPI}${producerIri}`, {
                params: {
                  producer: true,
                },
              }, { 'Content-Type': 'application/json' })
                .then((res) => store.dispatch(saveProducers([res.data])))
                .catch((error) => console.log(error));
            });
          });
        })
        .catch((error) => console.log(error));
      break;
    case FETCH_PRODUCER:
      axios.get(`${baseUriAPI}/api/users/${action.id}`, { params: {
        producer: true,
      }}, { 'Content-Type': 'application/json' })
        .then((response) => {
          // console.log(response.data.addresses[0]);
          store.dispatch(saveProducer(response.data));
          store.dispatch(fetchProducts(response.data.products));
          store.dispatch(fetchAddressPro(response.data.addresses));
        })
        .catch((error) => console.log(error));
      break;
    case FETCH_ADDRESS_PRO:
      axios.get(`${baseUriAPI}${action.iri}`, {}, { 'Content-Type': 'application/json' })
        .then((response) => {
          // console.log(response.data);
          store.dispatch(saveAddressPro(response.data));
        })
        .catch((error) => console.log(error));
      break;
//adresses sur la map

    case FETCH_ADDRESSES_PRO:
      // console.log('ADDRESS :', action);
      if (action.address[0]) {
        axios.get(`${baseUriAPI}${action.address[0]}`, {}, { 'Content-Type': 'application/json' })
          .then((response) => {
            // console.log(response.data);
            const address = response.data;
            // console.log(`${address.city}, ${address.postCode}, ${address.country}`)
            store.dispatch(saveAddressesPro(response.data, action.producerId));
            store.dispatch(fetchGeometry(`${address.city}, ${address.postCode}, ${address.country}`));
          })
          .catch((error) => console.log(error));
      }
      break;
    case FETCH_HOME_PRODUCERS:
      // Clear list :
      store.dispatch(clearGeometry());
      store.dispatch(clearProducers());
      // Call to API
      axios.get(`${baseUriAPI}/api/users`, { params: {
        producer: true,
        itemsPerPage: 1,
        random: 'yes',
      }}, { 'Content-Type': 'application/json' })
        .then((response) => {
          // console.log(response.data);
          store.dispatch(saveProducers(response.data['hydra:member']));
        })
        .catch((error) => console.log(error));
      break;
    default:
      next(action);
  }
};

export default producers;
