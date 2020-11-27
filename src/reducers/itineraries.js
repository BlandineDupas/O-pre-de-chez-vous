import {
  SAVE_ITINERARY,
  SAVE_ITINERARIES,
  CHANGE_INPUT_VALUE,
  CLEAR_ITINERARY,
  SAVE_ITINERARIES_USER,
} from 'src/actions/itineraries';

import {
  CHANGE_NAV_INPUT,
  CHANGE_SELECT_VALUE,
} from 'src/actions/nav';

import { SAVE_ITINERARY_USER } from 'src/actions/users';

const initialState = {
  inputValue: '',
  itinerary: {
    itineraryData: {},
    userData: {},
  },
  itineraries: [],
  userItineraries: {},
};

const itineraries = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_ITINERARIES:
      let newItineraries = [];
      if (state.itineraries.length > 0) {
        newItineraries = state.itineraries;
      }
      action.itineraries.forEach((itinerary) => {
        let included = false;
        newItineraries.forEach((oldItineraries) => {
          if (itinerary['@id'] === oldItineraries['@id']) {
            included = true;
          }
        });
        if (!included) {
          newItineraries.push(itinerary);
        }
      });
      return {
        ...state,
        itineraries: newItineraries,
        inputValue: '',
      };
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        inputValue: action.inputValue,
      };
    case SAVE_ITINERARY:
      return {
        ...state,
        itinerary: {
          ...state.itinerary,
          itineraryData: action.itinerary,
        },
      };
    case SAVE_ITINERARY_USER:
      // console.log('SAVE_USER');
      return {
        ...state,
        itinerary: {
          ...state.itinerary,
          userData: action.user,
        },
      };
    case CLEAR_ITINERARY:
      return {
        ...state,
        itineraries: [],
      };
    case CHANGE_NAV_INPUT:
      if (action.selectValue === 'itinerary') {
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
      if (action.selectValue === 'itinerary') {
        return {
          ...state,
          inputValue: action.inputValue,
        };
      }
      return {
        ...state,
        inputValue: '',
      };
    case SAVE_ITINERARIES_USER:
      return {
        ...state,
        userItineraries: {
          ...state.userItineraries,
          [action.itineraryId]: action.user,
        },
      };
    default:
      return state;
  }
};

export default itineraries;
