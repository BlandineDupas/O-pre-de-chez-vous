import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const CustomRoute = ({
  isLogged,
  path,
  component,
  render,
  isSubmitted,
  selectValue,
  needLogged,
}) => {
  // console.log(isSubmitted, selectValue, isLogged, path, component, render);
  // for all pages
  if (isSubmitted) {
    if (selectValue === 'producer') {
      return <Redirect to="/producers/list" />;
    }
    if (selectValue === 'itinerary') {
      return <Redirect to="/itineraries/list" />;
    }
  }

  // If logged
  if (isLogged) {
    // console.log(path);
    if (path === '/login' || path === '/register') {
      return <Redirect from={path} to="/user/overview/:id" />;
    }
    return <Route path={path} exact component={component} render={render} />;
  }
  // If not logged but need authentification
  if (needLogged) {
    return <Redirect from={path} to="/login" />;
  }
  // If not logged and no authentification needed
  return <Route path={path} exact component={component} render={render} />;
};

CustomRoute.propTypes = {
  isSubmitted: PropTypes.bool.isRequired,
  selectValue: PropTypes.string.isRequired,
  isLogged: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  component: PropTypes.any,
  render: PropTypes.func,
  needLogged: PropTypes.bool,
};

CustomRoute.defaultProps = {
  component: null,
  render: null,
  needLogged: false,
};

export default CustomRoute;
