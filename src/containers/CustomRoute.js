// Npm Import
import { connect } from 'react-redux';

// Local Import
import CustomRoute from 'src/components/Parts/CustomRoute';

// Action Creators

// map...
const mapStateToProps = (state) => ({
  isSubmitted: state.nav.isSubmitted,
  selectValue: state.nav.selectValue,
  isLogged: state.auth.isLogged,
});

const mapDispatchToProps = {};

// Export
export default connect(mapStateToProps, mapDispatchToProps)(CustomRoute);
