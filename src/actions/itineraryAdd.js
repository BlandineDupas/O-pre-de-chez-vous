export const FETCH_ITINERARY_ADD = 'FETCH_ITINERARY_ADD';
export const CHANGE_ADD_INPUT_VALUE = 'CHANGE_ADD_INPUT_VALUE';
export const ADD_ITINERARY_SUBMIT = 'ADD_ITINERARY_SUBMIT';
export const CLEAR_ADD_ITINERARY = 'CLEAR_ADD_ITINERARY';
export const SAVE_ITINERARY_ADD = 'SAVE_ITINERARY_ADD';

export const fetchItineraryAdd = () => ({
  type: FETCH_ITINERARY_ADD,
});

export const changeAddInputValue = (value, name) => {
  console.log('changeAddInputValue');
  return {
    type: CHANGE_ADD_INPUT_VALUE,
    value,
    name,
  };
};

export const addItinerarySubmit = () => {
  console.log('ADD_ITINERARY_SUBMIT');
  return {
    type: ADD_ITINERARY_SUBMIT,
  };
};

export const clearAddItinerary = () => ({
  type: CLEAR_ADD_ITINERARY,
});

export const saveItineraryAdd = (itinerary) => ({
  type: SAVE_ITINERARY_ADD,
  itinerary,
});
