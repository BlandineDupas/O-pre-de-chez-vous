import { connect } from 'react-redux';
import Form from 'src/components/Chatroom/Form';
import {
  sendMessage,
  setNewMessageContent,
  submitMessage,
} from 'src/actions/messages';

const mapStateToProps = (state) => ({
  inputValue: state.messages.newMessageContent,
});

const mapDispatchToProps = (dispatch) => ({
  sendMessage: () => {
    // à chaque fois qu'on exécute dispatch, on prévient le store qu'on veut changer le state
    // et le store va utiliser le reducer pour le changer.
    // Il faut pour cela un objet action qu'on passe à dispatch
    dispatch(sendMessage());
  },
  setNewMessageContent: (message) => {
    const action = setNewMessageContent(message);
    dispatch(action);
  },
  submitMessage: () => dispatch(submitMessage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
