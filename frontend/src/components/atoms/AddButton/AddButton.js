import styled from 'styled-components';
import PlusIcon from 'assets/add.svg';
import { theme } from '../../../theme/MainTheme';

const AddButton = styled.button`
  height: 80px;
  width: 80px;
  background-image: url(${PlusIcon});
  background-repeat: no-repeat;
  background-size: 25%;
  background-color: ${theme.colors.primary};
  background-position: center center;
  border-radius: 50%;
  border-color: transparent;
  position: fixed;
  bottom: 5%;
  right: 5%;
  transition: 0.5s;

  :hover {
    cursor: pointer;
    box-shadow: 0px 0px 10px -1px ${theme.colors.primary};
  }
`;

export default AddButton;
