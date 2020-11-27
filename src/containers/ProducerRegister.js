// Npm Import
import { connect } from 'react-redux';

// Local Import
import ProducerRegister from 'src/components/ProducerRegister';

// Action Creators
import { registerProducerSubmit } from 'src/actions/register';
// map...
const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  registerProducerSubmit: () => dispatch(registerProducerSubmit()),
});

// Export
export default connect(mapStateToProps, mapDispatchToProps)(ProducerRegister);
