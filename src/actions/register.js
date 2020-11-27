export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const CHANGE_CHECKBOX = 'CHANGE_CHECKBOX';
export const REGISTER_SUBMIT = 'REGISTER_SUBMIT';
export const REGISTER_ERROR = 'REGISTER_ERROR';
export const CLEAR_FORM = 'CLEAR_FORM';
export const REGISTER_PRODUCER_SUBMIT = 'REGISTER_PRODUCER_SUBMIT';

export const changeInputValue = (currentValue, target) => ({
  type: CHANGE_INPUT_VALUE,
  currentValue,
  target,
});

export const changeCheckbox = (isChecked, target) => ({
  type: CHANGE_CHECKBOX,
  isChecked,
  target,
});

export const registerSubmit = () => ({
  type: REGISTER_SUBMIT,
});

export const registerError = (errorsArray) => ({
  type: REGISTER_ERROR,
  errorsArray,
});

export const clearForm = () => ({
  type: CLEAR_FORM,
});

export const registerProducerSubmit = () => ({
  type: REGISTER_PRODUCER_SUBMIT,
});
