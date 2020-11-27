// Npm Import
import { connect } from 'react-redux';

// Local Import
import Register from 'src/components/Register';

// Action Creators
import { registerSubmit } from 'src/actions/register';
// map...
const mapStateToProps = (state) => ({
  wantToBeProducer: state.register.producer,
  errors: state.register.registerError,
});

const mapDispatchToProps = (dispatch) => ({
  registerSubmit: () => dispatch(registerSubmit()),
});

// Export
export default connect(mapStateToProps, mapDispatchToProps)(Register);
