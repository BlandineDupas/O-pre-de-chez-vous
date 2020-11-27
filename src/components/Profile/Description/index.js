import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Description = ({ content, children, title }) => (
  <div className="description">
    <h2 className="description__title">{title}</h2>
    <p className="description__content">{content}</p>
    {children}
  </div>
);

Description.propTypes = {
  content: PropTypes.string,
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
};

Description.defaultProps = {
  content: '',
  children: null,
};

export default Description;
