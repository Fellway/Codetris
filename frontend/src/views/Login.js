import React from 'react';
import styled from 'styled-components';
import { theme } from 'theme/MainTheme';
import LoginBackground from 'assets/login.jpg';
import IconInput from 'components/atoms/InputIcon/InputIcon';
import UserIcon from 'assets/user.svg';
import KeyIcon from 'assets/key.svg';
import Button from 'components/atoms/Button/Button';
import { Formik, Form } from 'formik';
import Hint from 'components/atoms/Hint/Hint';
import { connect } from 'react-redux';
import { authenticate as authenticateAction } from 'actions';
import propTypes from 'prop-types';
import { Redirect } from 'react-router';

const LoginPage = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${LoginBackground});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Wrapper = styled.div`
  min-width: 300px;
  width: 80%;
  max-width: 350px;
  position: absolute;
  display: grid;
  row-gap: 30px;
  justify-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const LoginForm = styled(Form)`
  background-color: rgba(0, 0, 0, 0.85);
  border-radius: 10px;
  padding: 50px;
  width: 100%;
`;

const StyledIconInput = styled(IconInput)`
  :first-child {
    margin-bottom: 25px;
  }
`;

const StyledButton = styled(Button)`
  margin-top: 30px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`;

const AppName = styled.div`
  color: ${theme.grey100};
  font-size: ${theme.fontSize.xl};
  font-weight: ${theme.fontWeight.bold};
`;

const Login = ({ token, error, authenticate }) => (
  <LoginPage>
    <Wrapper>
      <AppName>Codetris</AppName>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={({ username, password }) => {
          authenticate(username, password);
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => {
          if (token) {
            return <Redirect to="/" />;
          }
          return (
            <LoginForm onSubmit={handleSubmit}>
              <StyledIconInput
                type="text"
                name="username"
                dark
                icon={UserIcon}
                placeholder="login"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
              />
              <StyledIconInput
                type="password"
                name="password"
                dark
                icon={KeyIcon}
                placeholder="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {error && (
                <Hint center color="error">
                  {error}
                </Hint>
              )}
              <StyledButton type="submit">Sign In</StyledButton>
              <Hint center color="dark">
                {' '}
                Forgot password?
              </Hint>
            </LoginForm>
          );
        }}
      </Formik>
    </Wrapper>
  </LoginPage>
);

const mapStateToProps = ({ token = null, error = null }) => ({
  token,
  error,
});

const mapDsipatchToProps = (dispatch) => ({
  authenticate: (username, password) => dispatch(authenticateAction(username, password)),
});

export default connect(mapStateToProps, mapDsipatchToProps)(Login);

Login.propTypes = {
  token: propTypes.string,
  error: propTypes.string,
  authenticate: propTypes.func.isRequired,
};

Login.defaultProps = {
  token: '',
  error: '',
};
