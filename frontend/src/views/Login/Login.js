import React from 'react';
import styled from 'styled-components';
import { theme } from 'theme/MainTheme';
import LoginBackground from 'assets/login.jpg';
import IconInput from 'components/atoms/InputIcon/InputIcon';
import UserIcon from 'assets/user.svg';
import KeyIcon from 'assets/key.svg';
import Button from 'components/atoms/Button/Button';

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
  max-width: 400px;
  position: absolute;
  display: grid;
  row-gap: 30px;
  justify-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const LoginForm = styled.div`
  background-color: rgba(0, 0, 0, 0.85);
  border-radius: 10px;
  padding: 50px;
  display: grid;
  justify-items: center;
  row-gap: 40px;
  width: 100%;
`;

const AppName = styled.div`
  color: ${theme.grey100};
  font-size: ${theme.fontSize.xl};
  font-weight: ${theme.fontWeight.bold};
`;

const Login = () => (
  <LoginPage>
    <Wrapper>
      <AppName>Codetris</AppName>
      <LoginForm>
        <IconInput dark icon={UserIcon} placeholder="login" />
        <IconInput
          hint="Forgot password?"
          type="password"
          dark
          icon={KeyIcon}
          placeholder="password"
        />
        <Button>Sign In</Button>
      </LoginForm>
    </Wrapper>
  </LoginPage>
);

export default Login;
