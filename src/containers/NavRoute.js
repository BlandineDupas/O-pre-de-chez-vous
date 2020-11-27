// Npm Import
import { connect } from 'react-redux';

// Local Import
import NavRoute from 'src/components/Parts/NavRoute';

// Action Creators

// map...
const mapStateToProps = (state) => ({
  isSubmitted: state.nav.isSubmitted,
  selectValue: state.nav.selectValue,
});

const mapDispatchToProps = (dispatch) => ({
});

// Export
export default connect(mapStateToProps, mapDispatchToProps)(NavRoute);
