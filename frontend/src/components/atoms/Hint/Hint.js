import styled from 'styled-components';
import { theme } from 'theme/MainTheme';

const Hint = styled.span`
  color: ${({ dark }) => (dark ? theme.colors.primary : theme.grey500)};
  letter-spacing: 1px;
  font-size: ${theme.fontSize.xs};
  width: fit-content;
  float: right;
  padding-top: 15px;

  :hover {
    cursor: pointer;
  }
`;

export default Hint;
