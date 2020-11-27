import { CHANGE_ADD_INPUT_VALUE, CLEAR_ADD_ITINERARY, SAVE_ITINERARY_ADD } from 'src/actions/itineraryAdd';

const initialState = {
  departureCity: '',
  arrivalCity: '',
  departureDate: '',
  arrivalDate: '',
  description: '',
  aroundAccepted: '',
};

const itineraryAdd = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_ADD_INPUT_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case CLEAR_ADD_ITINERARY:
      return {
        ...state,
        departureCity: '',
        arrivalCity: '',
        departureDate: '',
        arrivalDate: '',
        description: '',
        aroundAccepted: '',
      };
    case SAVE_ITINERARY_ADD:
      return {
        ...state,
        itinerary: action.itinerary,
      };
    default:
      return state;
  }
};

export default itineraryAdd;
