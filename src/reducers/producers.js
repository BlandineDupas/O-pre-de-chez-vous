import {
  SAVE_PRODUCERS,
  CHANGE_INPUT_VALUE,
  SAVE_PRODUCER,
  SAVE_ADDRESS_PRO,
  CLEAR_PRODUCERS,
  SAVE_ADDRESSES_PRO,
} from 'src/actions/producers';

import {
  CHANGE_NAV_INPUT,
  CHANGE_SELECT_VALUE,
} from 'src/actions/nav';

import {
  SAVE_TAG,
} from 'src/actions/tags';

import { SAVE_PRODUCT } from 'src/actions/products';

const initialState = {
  inputValue: '',
  producer: {},
  producers: [],
  producersTags: {},
  producersAddresses: {},
};

const producers = (state = initialState, action = {}) => {
  switch (action.type) {
    case CLEAR_PRODUCERS:
      return {
        ...state,
        producers: [],
        producersTags: {},
      };
    case SAVE_PRODUCERS:
      // Prepare the new array of producers
      let newProducers = [];
      if (state.producers.length > 0) {
        newProducers = state.producers;
      }
      action.producers.forEach((producer) => {
        let included = false;
        newProducers.forEach((oldProducer) => {
          if (producer['@id'] === oldProducer['@id']) {
            included = true;
          }
        });
        if (!included) {
          newProducers.push(producer);
        }
      });
      // And then return
      return {
        ...state,
        producers: newProducers,
        inputValue: '',
      };
    case SAVE_TAG:
      let newProducerTags = [];
      if (state.producersTags[action.producerId]) {
        newProducerTags = state.producersTags[action.producerId];
      }
      let alreadySaved = false;
      newProducerTags.forEach((tag) => {
        if (tag.id === action.tag.id) {
          alreadySaved = true;
        }
      });
      if (!alreadySaved) {
        newProducerTags.push(action.tag);
      }

      return {
        ...state,
        producersTags: {
          ...state.producersTags,
          [action.producerId]: newProducerTags,
        },
      };
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        inputValue: action.inputValue,
      };
    case SAVE_PRODUCER:
      return {
        ...state,
        producer: action.producer,
      };
    case SAVE_PRODUCT:
      // console.log(SAVE_PRODUCT);
      let newProductsData = []
      if (state.producer.productsData) {
        newProductsData = state.producer.productsData;
      }

      newProductsData.push(action.product);

      return {
        ...state,
        producer: {
          ...state.producer,
          productsData: newProductsData,
        },
      };
    case SAVE_ADDRESS_PRO:
      // console.log(SAVE_ADDRESS_PRO, state.producer, action.address);
      return {
        ...state,
        producer: {
          ...state.producer,
          addressPro: action.address,
        },
      };
// Adresses sur la map
    case SAVE_ADDRESSES_PRO:
      // console.log(SAVE_ADDRESSES_PRO);
      return {
        ...state,
        producersAddresses: {
          ...state.producersAddresses,
          [action.producerId]: action.address,
        },
      };
    case CHANGE_NAV_INPUT:
      if (action.selectValue === 'producer') {
        return {
          ...state,
          inputValue: action.inputValue,
        };
      }
      return {
        ...state,
        inputValue: '',
      };
    case CHANGE_SELECT_VALUE:
      if (action.selectValue === 'producer') {
        return {
          ...state,
          inputValue: action.inputValue,
        };
      }
      return {
        ...state,
        inputValue: '',
      };
    default:
      return state;
  }
};

export default producers;
