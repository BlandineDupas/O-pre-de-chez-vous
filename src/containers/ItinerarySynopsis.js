// Npm Import
import { connect } from 'react-redux';

// Local Import
import ItinerariesSynopsis from 'src/components/Itineraries/ItinerarySynopsis';

// Action Creators
import {
  fetchItineraryUser,
} from 'src/actions/itineraries';

import { fetchGeometry, clearGeometry } from 'src/actions/carte';
// map...
const mapStateToProps = (state) => ({
  userItinerary: state.itineraries.userItineraries,
});

const mapDispatchToProps = (dispatch) => ({
  fetchItineraryUser: (userIriArray, id) => dispatch(fetchItineraryUser(userIriArray, id)),
  fetchGeometry: (address) => dispatch(fetchGeometry(address)),
  clearGeometry: () => dispatch(clearGeometry(),)
});

// Export
export default connect(mapStateToProps, mapDispatchToProps)(ItinerariesSynopsis);
