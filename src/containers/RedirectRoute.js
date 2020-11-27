// Npm Import
import { connect } from 'react-redux';

// Local Import
import RedirectRoute from 'src/components/Parts/RedirectRoute';

// Action Creators

// map...
const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
});

const mapDispatchToProps = {};

// Export
export default connect(mapStateToProps, mapDispatchToProps)(RedirectRoute);
