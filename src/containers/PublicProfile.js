// Npm Import
import { connect } from 'react-redux';

// Local Import
import PublicProfile from 'src/components/Profile/User/PublicProfile';

// Action Creators
import { fetchProfileUser, fetchUserItinerary } from 'src/actions/users';

// map...
const mapStateToProps = (state) => ({
  firstname: state.users.user.firstname,
  image: state.users.user.image,
  itineraries: state.itineraries.itineraries,
  rate: 4,
});

const mapDispatchToProps = (dispatch) => ({
  fetchProfileUser: (id) => dispatch(fetchProfileUser(id)),
  fetchUserItinerary: (id) => dispatch(fetchUserItinerary(id)),
});

// Export
export default connect(mapStateToProps, mapDispatchToProps)(PublicProfile);
