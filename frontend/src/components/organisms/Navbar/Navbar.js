import React from 'react';
import styled from 'styled-components';
import { theme } from 'theme/MainTheme';
import Summary from 'components/molecules/Summary/Summary';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import DropdownIcon from 'assets/dropdown.svg';
import InputIcon from 'components/atoms/InputIcon/InputIcon';
import IconLoupe from 'assets/loupe.svg';

const Wrapper = styled.div`
  align-items: center;
  position: fixed;
  background-color: ${theme.grey450};
  width: 100%;
  height: 60px;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding-left: 130px;
`;

const SummaryWrapper = styled.div`
  display: inline-grid;
  grid-template-columns: auto auto;
  position: absolute;
  height: 60px;
  right: 0;
  padding-right: 40px;
`;

const Navbar = () => (
  <Wrapper>
    <InputIcon placeholder="Quick search" icon={IconLoupe} />
    <SummaryWrapper>
      <Summary />
      <ButtonIcon short secondary icon={DropdownIcon} />
    </SummaryWrapper>
  </Wrapper>
);

export default Navbar;
