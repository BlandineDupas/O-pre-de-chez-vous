// Npm Import
import { connect } from 'react-redux';

// Local Import
import Producers from 'src/components/Producers';

// Action Creators
import {
  fetchProducers,
  changeInputValue,
  //import des adresses (actions)
  fetchAddressesPro,
  searchProducers,
} from 'src/actions/producers';

import { registerSubmit } from 'src/actions/register';
import { hasNotBeenSubmitted } from 'src/actions/nav';
import { clearGeometry } from 'src/actions/carte';

// map...
const mapStateToProps = (state) => ({
  inputValue: state.producers.inputValue,
  producers: state.producers.producers,
  //import adresses map
  adresses: state.users.user.addresses,
  producersAddresses: state.producers.producersAddresses,
  isSubmitted: state.nav.isSubmitted,
  hasBeenSubmitted: state.nav.hasBeenSubmitted,
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducers: () => dispatch(fetchProducers()),
  changeInputValue: (inputValue) => dispatch(changeInputValue(inputValue)),
  searchProducers: () => dispatch(searchProducers()),
  clearGeometry: () => dispatch(clearGeometry()),
  hasNotBeenSubmitted: () => dispatch(hasNotBeenSubmitted()),
});

// Export
export default connect(mapStateToProps, mapDispatchToProps)(Producers);
