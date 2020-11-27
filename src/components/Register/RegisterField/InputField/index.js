import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const InputField = ({
  type,
  name,
  id,
  placeholder,
  value,
  changeInputValue,
  isRequired,
}) => (
  <label htmlFor="inputName" className="register__field">
    <span className="register__field__label">{placeholder}&nbsp;:</span>
    <div className="register__field__input">
      <input
        className="inputField"
        name={name}
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={(evt) => changeInputValue(evt.target.value, name)}
        required={isRequired}
      />
    </div>
  </label>
);

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  changeInputValue: PropTypes.func.isRequired,
  isRequired: PropTypes.bool,
};

InputField.defaultProps = {
  isRequired: false,
};

export default InputField;
