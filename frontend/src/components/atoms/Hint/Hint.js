import styled from 'styled-components';
import { theme } from 'theme/MainTheme';

const handleColorType = (color) => {
  switch (color) {
    case 'dark':
      return theme.colors.primary;
    case 'error':
      return theme.colors.red;
    default:
      return theme.grey500;
  }
};

const Hint = styled.div`
  color: ${({ color }) => handleColorType(color)};
  letter-spacing: 1px;
  font-size: ${theme.fontSize.xs};
  padding-top: 15px;
  text-align: ${({ center }) => (center ? 'center' : '')};
`;

export default Hint;
