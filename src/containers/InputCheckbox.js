// Npm Import
import { connect } from 'react-redux';

// Local Import
import InputCheckbox from 'src/components/Register/InputCheckbox';

// Action Creators
import { changeCheckbox } from 'src/actions/register';
// map...
const mapStateToProps = (state, ownProps) => ({
  isChecked: state.register[ownProps.name],
});

const mapDispatchToProps = (dispatch) => ({
  changeCheckbox: (isChecked, target) => dispatch(changeCheckbox(isChecked, target)),
});

// Export
export default connect(mapStateToProps, mapDispatchToProps)(InputCheckbox);
