export const FETCH_USER = 'FETCH_USER';
export const SAVE_ITINERARY_USER = 'SAVE_ITINERARY_USER';
export const FETCH_PROFILE_USER = 'FETCH_PROFILE_USER';
export const SAVE_PROFILE_USER = 'SAVE_PROFILE_USER';
export const FETCH_USER_ITINERARY = 'FETCH_USER_ITINERARY';
export const SAVE_USER_ITINERARY = 'SAVE_USER_ITINERARY';


export const fetchUser = (iri) => ({
  type: FETCH_USER,
  iri,
});

export const saveItineraryUser = (user) => {
  // console.log('saveItineraryUser');
  return {
    type: SAVE_ITINERARY_USER,
    user,
  };
};

export const fetchProfileUser = (id) => {
  // console.log('fetchProfile', id);
  return {
    type: FETCH_PROFILE_USER,
    id,
  };
};

export const saveProfileUser = (user) => {
  // console.log('saveprofileUser');
  return {
    type: SAVE_PROFILE_USER,
    user,
  };
};

export const fetchUserItinerary = (id) => {
  // console.log('userItineraryIrisArray');
  return {
    type: FETCH_USER_ITINERARY,
    id,
  };
};

export const saveUserItinerary = (itinerary) => {
  // console.log('itinerary');
  return {
    type: SAVE_USER_ITINERARY,
    itinerary,
  };
};
