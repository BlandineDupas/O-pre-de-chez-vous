// Npm Import
import { connect } from 'react-redux';

// Local Import
import Itineraries from 'src/components/Itineraries';

// Action Creators
import {
  fetchItineraries,
  searchItineraries,
  changeInputValue,
} from 'src/actions/itineraries';
import { hasNotBeenSubmitted } from 'src/actions/nav';

// map...
const mapStateToProps = (state) => ({
  username: state.itineraries.itinerary.userData.username,
  image: state.itineraries.itinerary.userData.image,
  itineraries: state.itineraries.itineraries,
  inputValue: state.itineraries.inputValue,
  hasBeenSubmitted: state.nav.hasBeenSubmitted,
});

const mapDispatchToProps = (dispatch) => ({
  fetchItineraries: () => dispatch(fetchItineraries()),
  searchItineraries: () => dispatch(searchItineraries()),
  changeInputValue: (inputValue) => dispatch(changeInputValue(inputValue)),
  hasNotBeenSubmitted: () => dispatch(hasNotBeenSubmitted()),
});

// Export
export default connect(mapStateToProps, mapDispatchToProps)(Itineraries);
