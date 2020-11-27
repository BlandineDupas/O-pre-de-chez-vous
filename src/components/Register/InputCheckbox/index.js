import React from 'react';
import PropTypes from 'prop-types';

// STYLES
import './styles.scss';

const InputCheckbox = ({
  id,
  label,
  name,
  changeCheckbox,
  isChecked,
}) => (
  <label className="checkboxField" htmlFor={id}>
    <input
      name={name}
      type="checkbox"
      id={id}
      checked={isChecked}
      onChange={() => changeCheckbox(!isChecked, name)}
    />
    {label}
  </label>
);

InputCheckbox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  changeCheckbox: PropTypes.func.isRequired,
  isChecked: PropTypes.bool.isRequired,
};

export default InputCheckbox;
