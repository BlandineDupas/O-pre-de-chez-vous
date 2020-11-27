// Npm Import
import { connect } from 'react-redux';

// Local Import
import MessageDetails from 'src/components/Messaging/MessageDetails';

// Action Creators
import {
  loadDiscussion,
} from 'src/actions/messages';
// map...
const mapStateToProps = (state) => ({
  userId: state.auth.user.id,
});

const mapDispatchToProps = (dispatch) => ({
  loadDiscussion: (userId, addresseeId) => dispatch(loadDiscussion(userId, addresseeId)),
});

// Export
export default connect(mapStateToProps, mapDispatchToProps)(MessageDetails);
