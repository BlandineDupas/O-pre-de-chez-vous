import React from 'react';
import PropTypes from 'prop-types';

// STYLES
import './styles.scss';

const Page = ({ title, children }) => (
  <div className="mainPage">
    {title && <h1 className="mainPage__title">{title}</h1>}
    {children}
  </div>
);

Page.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Page.defaultProps = {
  title: '',
};

export default Page;
