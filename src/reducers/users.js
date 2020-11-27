import { SAVE_PROFILE_USER, SAVE_USER_ITINERARY } from 'src/actions/users';

export const initialState = {
  user: {},
  itineraries: [],
};

const users = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_PROFILE_USER:
        // console.log('SAVE_PROFILE_USER');
      return {
        ...state,
        user: action.user,
      };
    case SAVE_USER_ITINERARY:
        // console.log('SAVE_USER_ITINERARY');
      let newItinerariesData = [];
      if (state.user.itinerariesData) {
        newItinerariesData = state.user.itinerariesData;
      }
      newItinerariesData.push(action.itinerary);
      return {
        ...state,
        user: {
          ...state.user,
          itinerariesData: newItinerariesData,
        },
      };
    default:
      return state;
  }
};

export default users;
