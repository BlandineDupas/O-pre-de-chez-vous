import {
  TOGGLE_MENU,
  RESIZE_WINDOW,
  DISPLAY_MENU,
  NAV_SUBMIT,
  CHANGE_SELECT_VALUE,
  CHANGE_NAV_INPUT,
  NAV_UNSUBMIT,
  HAS_NOT_BEEN_SUBMITTED,
} from 'src/actions/nav';

const initialState = {
  menuIsVisible: false,
  windowWidth: 0,
  inputValue: '',
  isSubmitted: false,
  selectValue: 'producer',
  hasBeenSubmitted: false,
};

const nav = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_MENU:
      // console.log('TOGGLE');
      return {
        ...state,
        menuIsVisible: !state.menuIsVisible,
      };
    case RESIZE_WINDOW:
      // console.log('RESIZE', window.innerWidth, state.menuIsVisible);
      return {
        ...state,
        windowWidth: window.innerWidth,
      };
    case DISPLAY_MENU:
      // console.log('DISPLAY', action.windowWidth, state.menuIsVisible);
      return {
        ...state,
        menuIsVisible: (action.windowWidth >= 768),
      };
    case NAV_SUBMIT:
      return {
        ...state,
        isSubmitted: true,
        hasBeenSubmitted: true,
      };
    case NAV_UNSUBMIT:
      return {
        ...state,
        isSubmitted: false,
      };
    case CHANGE_SELECT_VALUE:
      return {
        ...state,
        selectValue: action.selectValue,
      };
    case CHANGE_NAV_INPUT:
      return {
        ...state,
        inputValue: action.inputValue,
      };
    case HAS_NOT_BEEN_SUBMITTED:
      return {
        ...state,
        hasBeenSubmitted: false,
      };
    default:
      return state;
  }
};

export default nav;
