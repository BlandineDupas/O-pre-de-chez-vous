// Npm Import
import { connect } from 'react-redux';

// Local Import
import ItineraryAdd from 'src/components/ItineraryAdd';

// Action Creators
import { addItinerarySubmit, changeAddInputValue } from 'src/actions/itineraryAdd';

// map...

const mapStateToProps = (state) => ({
  departureCity: state.itineraryAdd.departureCity,
  arrivalCity: state.itineraryAdd.arrivalCity,
  departureDate: state.itineraryAdd.departureDate,
  arrivalDate: state.itineraryAdd.arrivalDate,
  description: state.itineraryAdd.description,
  aroundAccepted: state.itineraryAdd.aroundAccepted,
});

const mapDispatchToProps = (dispatch) => ({
  addItinerarySubmit: () => dispatch(addItinerarySubmit()),
  changeAddInputValue: (value, name) => dispatch(changeAddInputValue(value, name)),
});

// Export
export default connect(mapStateToProps, mapDispatchToProps)(ItineraryAdd);
