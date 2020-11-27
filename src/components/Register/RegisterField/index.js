import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const RegisterFieldset = ({ children, label }) => (
  <fieldset className="register__fieldset">
    <p className="register__fieldset__title">{label}</p>
    {children}
  </fieldset>
);

RegisterFieldset.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
};

export default RegisterFieldset;
