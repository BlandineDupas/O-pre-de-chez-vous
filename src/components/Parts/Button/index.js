import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Button = ({
  type,
  className,
  content,
  onClick,
  onClickParam,
}) => (
  <button type={type} className={`button ${className}`} onClick={() => onClick(onClickParam)}>{content}</button>
);

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  content: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  onClickParam: PropTypes.any,
};

Button.defaultProps = {
  type: 'button',
  className: '',
  onClick: () => {},
  onClickParam: null,
};

export default Button;
