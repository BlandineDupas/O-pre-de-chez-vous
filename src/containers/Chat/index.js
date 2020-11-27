import { connect } from 'react-redux';
import Chat from 'src/components/Chatroom/Chat';
import { isAuthor } from 'src/selectors';

const mapStateToProps = (state, ownProps) => ({
  isMine: isAuthor(ownProps.author, state.auth.user.username),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
