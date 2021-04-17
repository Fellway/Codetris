import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import propTypes from 'prop-types';
import { Redirect } from 'react-router';
import { logout as logoutAction } from 'actions';

const PrivateRoute = ({ token, logout, component: Component, path, ...rest }) => {
  if (path === '/logout') {
    logout();
  }
  return (
    <Route
      {...rest}
      render={(props) => (token ? <Component {...props} /> : <Redirect to="/login" />)}
    />
  );
};

const mapStateToProps = ({ token }) => ({
  token,
});

const mapDsipatchToProps = (dispatch) => ({
  logout: () => dispatch(logoutAction()),
});

export default connect(mapStateToProps, mapDsipatchToProps)(PrivateRoute);

PrivateRoute.propTypes = {
  path: propTypes.string.isRequired,
  token: propTypes.string,
  component: propTypes.elementType.isRequired,
  logout: propTypes.func.isRequired,
};

PrivateRoute.defaultProps = {
  token: null,
};
