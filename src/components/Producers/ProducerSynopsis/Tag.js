import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Tag = ({ tagName }) => (
  <p className="producer-synopsis__products__item">{tagName}</p>
);

Tag.propTypes = {
  tagName: PropTypes.string.isRequired,
};

export default Tag;
