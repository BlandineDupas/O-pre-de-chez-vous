import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './styles.scss';

const HomeSnippet = ({ children, title, link }) => (
  <div className="homeSnippet">
    <p className="homeSnippet__title">{title} :</p>
    {children}
    <Link to={link} className="homeSnippet__viewMore">Voir plus...</Link>
  </div>
);

HomeSnippet.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default HomeSnippet;
