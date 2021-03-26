import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import propTypes from 'prop-types';
import { Redirect } from 'react-router';

const PrivateRoute = ({ token, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (token ? <Component {...props} /> : <Redirect to="/login" />)}
  />
);

const mapStateToProps = ({ token }) => ({
  token,
});

export default connect(mapStateToProps, null)(PrivateRoute);

PrivateRoute.propTypes = {
  token: propTypes.string,
  component: propTypes.elementType.isRequired,
};

PrivateRoute.defaultProps = {
  token: null,
};
