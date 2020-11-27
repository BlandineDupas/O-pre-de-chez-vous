// Npm Import
import { connect } from 'react-redux';

// Local Import
import Messaging from 'src/components/Messaging';

// Action Creators
import { fetchDiscussions } from 'src/actions/messages';

// map...
const mapStateToProps = (state) => ({
  userId: state.auth.user.id,
  discussions: state.messages.discussions,
});

const mapDispatchToProps = (dispatch) => ({
  fetchDiscussions: (userId) => dispatch(fetchDiscussions(userId)),
});

// Export
export default connect(mapStateToProps, mapDispatchToProps)(Messaging);
