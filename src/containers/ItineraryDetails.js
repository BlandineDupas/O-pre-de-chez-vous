// Npm Import
import { connect } from 'react-redux';

// Local Import
import ItineraryDetails from 'src/components/ItineraryDetails';

// Action Creators
import { fetchItinerary } from 'src/actions/itineraries';


// map...
const mapStateToProps = (state) => ({
  departureAddress: state.itineraries.itinerary.itineraryData.departureAddress,
  arrivalAddress: state.itineraries.itinerary.itineraryData.arrivalAddress,
  dateDeparture: state.itineraries.itinerary.itineraryData.dateDeparture,
  dateArrival: state.itineraries.itinerary.itineraryData.dateArrival,
  description: state.itineraries.itinerary.itineraryData.description,
  around: '',
  userId: state.itineraries.itinerary.userData.id,
  username: state.itineraries.itinerary.userData.username,
  image: state.itineraries.itinerary.userData.image,
});

const mapDispatchToProps = (dispatch) => ({
    fetchItinerary: (id) => dispatch(fetchItinerary(id)),
});

// Export
export default connect(mapStateToProps, mapDispatchToProps)(ItineraryDetails);
