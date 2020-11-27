export const SAVE_ITINERARY = 'SAVE_ITINERARY';
export const FETCH_ITINERARY = 'FETCH_ITINERARY';
export const FETCH_ITINERARIES = 'FETCH_ITINERARIES';
export const SAVE_ITINERARIES = 'SAVE_ITINERARIES';
export const SEARCH_ITINERARIES = 'SEARCH_ITINERARIES';
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const CLEAR_ITINERARY = 'CLEAR_ITINERARY';
export const PUSH_ITINERARY = 'PUSH_ITINERARY';
export const FETCH_HOME_ITINERARIES = 'FETCH_HOME_ITINERARIES';
export const FETCH_ITINERARY_USER = 'FETCH_ITINERARY_USER';
export const SAVE_ITINERARIES_USER = 'SAVE_ITINERARIES_USER';

export const saveItinerary = (itinerary) => ({
  type: SAVE_ITINERARY,
  itinerary,
});

export const fetchItinerary = (id) => ({
  type: FETCH_ITINERARY,
  id,
});

export const fetchItineraries = () => ({
  type: FETCH_ITINERARIES,
});

export const saveItineraries = (itineraries) => ({
  type: SAVE_ITINERARIES,
  itineraries,
});

export const searchItineraries = () => ({
  type: SEARCH_ITINERARIES,
});

export const changeInputValue = (inputValue) => ({
  type: CHANGE_INPUT_VALUE,
  inputValue,
});

export const clearItineraries = (itinerary) => ({
  type: CLEAR_ITINERARY,
  itinerary,
});

export const pushItinerary = (itineraries) => ({
  type: PUSH_ITINERARY,
  itineraries,
});

export const fetchHomeItineraries = () => ({
  type: FETCH_HOME_ITINERARIES,
});

export const fetchItineraryUser = (userIriArray, itineraryId) => ({
  type: FETCH_ITINERARY_USER,
  userIriArray,
  itineraryId,
});

export const saveItinerariesUser = (user, itineraryId) => ({
  type: SAVE_ITINERARIES_USER,
  user,
  itineraryId,
});
