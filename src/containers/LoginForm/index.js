import { connect } from 'react-redux';
import LoginForm from 'src/components/LoginForm';
import { changeValue, loginCheck, logout } from 'src/actions/auth';

const mapStateToProps = (state) => ({
  identifiant: state.auth.identifiant,
  password: state.auth.password,
  isLogged: state.auth.isLogged,
  loggedMessage: `Bienvenue ${state.auth.identifiant}`,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    const action = changeValue(value, name);
    dispatch(action);
  },
  handleLogin: () => {
    const action = loginCheck();
    dispatch(action);
  },
  handleLogout: () => {
    dispatch(logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
