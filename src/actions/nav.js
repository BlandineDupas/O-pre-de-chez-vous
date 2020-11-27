export const TOGGLE_MENU = 'TOGGLE_MENU';
export const RESIZE_WINDOW = 'RESIZE_WINDOW';
export const DISPLAY_MENU = 'DISPLAY_MENU';
export const NAV_SUBMIT = 'NAV_SUBMIT';
export const NAV_INPUT_VALUE = 'NAV_INPUT_VALUE';
export const CHANGE_NAV_INPUT = 'CHANGE_NAV_INPUT';
export const CHANGE_SELECT_VALUE = 'CHANGE_SELECT_VALUE';
export const NAV_UNSUBMIT = 'NAV_UNSUBMIT';
export const HAS_NOT_BEEN_SUBMITTED = 'HAS_NOT_BEEN_SUBMITTED';

export const toggleMenu = () => ({
  type: TOGGLE_MENU,
});

export const resizeWindow = () => ({
  type: RESIZE_WINDOW,
});

export const displayMenu = () => ({
  type: DISPLAY_MENU,
  windowWidth: window.innerWidth,
});

export const navSubmit = (isSubmitted) => ({
  type: NAV_SUBMIT,
  isSubmitted,
});

export const navUnsubmit = () => ({
  type: NAV_UNSUBMIT,
});

export const navInputValue = (inputValue) => ({
  type: NAV_INPUT_VALUE,
  inputValue,
});

export const changeNavInput = (inputValue, selectValue) => ({
  type: CHANGE_NAV_INPUT,
  inputValue,
  selectValue,
});

export const changeSelectValue = (selectValue, inputValue) => ({
  type: CHANGE_SELECT_VALUE,
  selectValue,
  inputValue,
});

export const hasNotBeenSubmitted = () => ({
  type: HAS_NOT_BEEN_SUBMITTED,
});
