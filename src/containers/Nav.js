// Npm Import
import { connect } from 'react-redux';

// Local Import
import Nav from 'src/components/Nav';

// Action Creators
import {
  toggleMenu,
  resizeWindow,
  displayMenu,
  changeNavInput,
  navSubmit,
  changeSelectValue,
} from 'src/actions/nav';

import { logout } from 'src/actions/auth';

import { searchProducers } from 'src/actions/producers';
import { searchItineraries } from 'src/actions/itineraries';
// map...
const mapStateToProps = (state) => ({
  menuIsVisible: state.nav.menuIsVisible,
  isLogged: state.auth.isLogged,
  producer: state.auth.producer,
  username: state.auth.user.username,
  userId: state.auth.user.id,
  inputValue: state.nav.inputValue,
  selectValue: state.nav.selectValue,
});

const mapDispatchToProps = (dispatch) => ({
  toggleMenu: () => dispatch(toggleMenu()),
  resizeWindow: () => dispatch(resizeWindow()),
  displayMenu: () => dispatch(displayMenu()),
  logout: () => dispatch(logout()),
  changeNavInput: (inputValue, selectValue) => dispatch(changeNavInput(inputValue, selectValue)),
  changeSelectValue: (selectValue, inputValue) => dispatch(changeSelectValue(selectValue, inputValue)),
  navSubmit: (isSubmitted) => dispatch(navSubmit(isSubmitted)),
  searchProducers: () => dispatch(searchProducers()),
  searchItineraries: () => dispatch(searchItineraries()),
});

// Export
export default connect(mapStateToProps, mapDispatchToProps)(Nav);
