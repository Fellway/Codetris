import styled from 'styled-components';
import { theme } from 'theme/MainTheme';

const Header = styled.div`
  font-size: ${({ s }) => (s ? theme.fontSize.l : theme.fontSize.xl)};
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.white};
`;

export default Header;
