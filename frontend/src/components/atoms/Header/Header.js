import styled from 'styled-components';
import { theme } from 'theme/MainTheme';

const Header = styled.div`
  font-size: ${({ s }) => (s ? theme.fontSize.m : theme.fontSize.l)};
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.white};
`;

export default Header;
