import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const One = ({
  img,
  name,
  role,
  spe,
}) => (
  <div className="one">
    <img className="one__img" src={img} alt={name} />
    <p className="one__name">{name}</p>
    <p className="one__role">{role}</p>
    <p className="one__spe">{spe}</p>
  </div>
);

One.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  spe: PropTypes.string.isRequired,
};

export default One;
