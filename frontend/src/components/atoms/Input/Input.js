import styled from 'styled-components';
import { theme } from '../../../theme/MainTheme';

const Input = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid ${theme.colors.primary};
  border-radius: 5px;
  background-color: ${({ dark }) => (dark ? theme.grey500 : theme.grey100)};
  color: ${({ dark }) => (dark ? theme.grey100 : theme.colors.primary)};
  padding-left: 15px;
  transition: 0.5s;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 5px -1px ${theme.colors.primary};
  }

  ::placeholder {
    color: ${({ dark }) => (dark ? theme.grey100 : theme.grey500)};
  }
`;

export default Input;
