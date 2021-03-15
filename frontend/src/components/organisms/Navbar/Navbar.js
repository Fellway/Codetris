import InputIcon from 'components/atoms/InputIcon/InputIcon';
import React from 'react';
import styled from 'styled-components';
import { theme } from 'theme/MainTheme';
import IconLoupe from 'assets/loupe.svg';
import Summary from 'components/molecules/Summary/Summary';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import DropdownIcon from 'assets/dropdown.svg';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto;
  align-items: center;
  position: fixed;
  background-color: ${theme.grey500};
  width: 100%;
  height: 60px;
  z-index: -1;
  padding-left: 300px;
  padding-right: 30px;
`;

const Navbar = () => (
  <Wrapper>
    <InputIcon placeholder="search" icon={IconLoupe} />
    <Summary />
    <ButtonIcon short secondary icon={DropdownIcon} />
  </Wrapper>
);

export default Navbar;
