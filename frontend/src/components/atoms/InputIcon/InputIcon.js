import styled from 'styled-components';
import { theme } from '../../../theme/MainTheme';

const InputIcon = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid ${theme.colors.primary};
  border-radius: 40px;
  background-image: url(${({ icon }) => icon});
  background-position: 15px 10px;
  background-size: 20px;
  background-repeat: no-repeat;
  background-color: ${({ dark }) => (dark ? theme.grey500 : theme.grey100)};
  color: ${({ dark }) => (dark ? theme.grey100 : theme.colors.primary)};
  padding-left: 50px;
  transition: 0.5s;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 10px -1px ${theme.colors.primary};
  }

  ::placeholder {
    color: ${({ dark }) => (dark ? theme.grey100 : theme.grey500)};
  }
`;

export default InputIcon;
