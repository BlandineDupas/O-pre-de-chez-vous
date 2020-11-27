// Npm Import
import { connect } from 'react-redux';

// Local Import
import Home from 'src/components/Home';

// Action Creators
import {
  fetchHomeItineraries,
} from 'src/actions/itineraries';
import { fetchHomeProducers } from 'src/actions/producers';
// map...
const mapStateToProps = (state) => ({
  itineraries: state.itineraries.itineraries,
  producers: state.producers.producers,
  producersAddresses: state.producers.producersAddresses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchHomeItineraries: () => dispatch(fetchHomeItineraries()),
  fetchHomeProducers: () => dispatch(fetchHomeProducers()),
});

// Export
export default connect(mapStateToProps, mapDispatchToProps)(Home);
