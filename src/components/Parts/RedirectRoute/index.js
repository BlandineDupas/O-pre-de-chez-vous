import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const RedirectRoute = ({ isLogged, path, component, render }) => {
  if (!isLogged) {
    return <Route path={path} exact component={component} render={render} />;
  }
  return <Redirect from={path} to="/user/overview/:id" />;
};

RedirectRoute.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  component: PropTypes.object,
  render: PropTypes.func,
};

RedirectRoute.defaultProps = {
  component: null,
  render: null,
};

export default RedirectRoute;
