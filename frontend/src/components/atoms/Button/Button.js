import styled from 'styled-components';
import { theme } from 'theme/MainTheme';

const Button = styled.button`
  width: 200px;
  height: 45px;
  border-radius: 50px;
  background: rgb(130, 77, 255);
  background: linear-gradient(90deg, ${theme.colors.primary} 20%, ${theme.colors.secondary} 91%);
  border: none;
  font-weight: ${theme.fontWeight.bold};
  font-size: ${theme.fontSize.s};
  color: ${theme.grey100};
  letter-spacing: 2px;
  box-shadow: 0px 0px 3px -1px ${theme.colors.primary};
  transition: 0.5s;

  :hover {
    cursor: pointer;
    box-shadow: 0px 0px 10px -1px ${theme.colors.primary};
  }
`;

export default Button;
