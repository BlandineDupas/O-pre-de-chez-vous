// Npm Import
import { connect } from 'react-redux';

// Local Import
import InputField from 'src/components/Register/RegisterField/InputField';

// Action Creators
import { changeInputValue } from 'src/actions/register';

// map...
const mapStateToProps = (state, ownProps) => ({
  value: state.register[ownProps.name],
});

const mapDispatchToProps = (dispatch) => ({
  changeInputValue: (currentValue, target) => dispatch(changeInputValue(currentValue, target)),
});

// Export
export default connect(mapStateToProps, mapDispatchToProps)(InputField);
