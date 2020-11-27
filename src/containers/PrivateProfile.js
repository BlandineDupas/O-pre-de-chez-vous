// Npm Import
import { connect } from 'react-redux';

// Local Import
import PrivateProfile from 'src/components/Profile/User/PrivateProfile';


// Action Creators
import { fetchProfileUser, fetchUserItinerary } from 'src/actions/users';

// map...
const mapStateToProps = (state) => ({
  firstname: state.users.user.firstname,
  rate: 1,
  image: state.users.user.image,
  producer: state.auth.producer,
  email: state.users.user.email,
  phone: state.users.user.phone,
  id: state.auth.user.id,
  itineraries: state.itineraries.itineraries,
});

const mapDispatchToProps = (dispatch) => ({
  fetchProfileUser: (id) => dispatch(fetchProfileUser(id)),
  fetchUserItinerary: (id) => dispatch(fetchUserItinerary(id)),
});

// Export
export default connect(mapStateToProps, mapDispatchToProps)(PrivateProfile);
