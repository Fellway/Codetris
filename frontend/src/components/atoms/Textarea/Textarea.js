import styled from 'styled-components';
import { theme } from '../../../theme/MainTheme';

const Textarea = styled.textarea`
  width: 100%;
  max-width: 100%;
  height: 200px;
  border: 1px solid ${theme.colors.primary};
  border-radius: 5px;
  background-color: ${({ dark }) => (dark ? theme.grey500 : theme.grey100)};
  color: ${({ dark }) => (dark ? theme.grey100 : theme.colors.primary)};
  padding-left: 15px;
  transition: 0.5s;
  resize: none;

  &:focus {
    outline: none;
    box-shadow: 0 0 5px -1px ${theme.colors.primary};
  }

  ::placeholder {
    color: ${({ dark }) => (dark ? theme.grey100 : theme.grey300)};
  }
`;

export default Textarea;
