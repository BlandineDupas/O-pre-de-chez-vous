// la fonction connect va créer un HOC : High Order Component
import { connect } from 'react-redux';
import Chatroom from 'src/components/Chatroom';

// Action creators
import {
  fetchMessages,
} from 'src/actions/messages';

// Map...
const mapStateToProps = (state) => ({
  messages: state.messages.discussion.messages,
  // userId: state.auth.user.id,
  userId: state.auth.user.id,
  addresseeIri: state.messages.discussion.addressee.iri,
  inputValue: state.messages.newMessageContent,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMessages: (userId, addresseeIri) => dispatch(fetchMessages(userId, addresseeIri)),
});

// const componentToConnect = connect(mapStateToProps, mapDispatchToProps);
// const connectedComponent = componentToConnect(Messages);
// export default connectedComponent;

export default connect(mapStateToProps, mapDispatchToProps)(Chatroom);
