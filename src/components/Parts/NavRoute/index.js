import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavRoute = ({
  isSubmitted,
  path,
  component,
  render,
  selectValue,
}) => {
  if (isSubmitted) {
    if (selectValue === 'producer') {
      return <Redirect to="/producers/list" />;
    }
    if (selectValue === 'itinerary') {
      return <Redirect to="/itineraries/list" />;
    }
  }
  return <Route path={path} exact component={component} render={render} />;
};

NavRoute.propTypes = {
  isSubmitted: PropTypes.bool.isRequired,
  selectValue: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  component: PropTypes.object,
  render: PropTypes.func,
};

NavRoute.defaultProps = {
  component: null,
  render: null,
};

export default NavRoute;
