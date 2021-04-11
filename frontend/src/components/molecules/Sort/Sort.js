import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import React from 'react';
import styled from 'styled-components';
import { theme } from 'theme/MainTheme';
import DropdownIcon from 'assets/dropdown2.svg';
import FilterIcon from 'assets/filter.svg';

const Wrapper = styled.summary`
  border-radius: 5px;
  border: 1px solid ${theme.grey400};
  padding-left: 15px;
  display: inline-grid;
  grid-template-columns: auto auto auto auto;
  align-items: center;
  background-color: ${theme.grey450};
  width: fit-content;
`;

const Text = styled.p`
  color: white;
  font-size: ${theme.fontSize.xs};
  margin-right: 10px;
`;

const BoldText = styled(Text)`
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.colors.primary};
  letter-spacing: 1px;
  margin-right: 0;
`;

const Summary = () => (
  <Wrapper>
    <Text>Sort by:</Text>
    <BoldText>Name</BoldText>
    <ButtonIcon transparent short secondary icon={DropdownIcon} />
    <ButtonIcon transparent short secondary icon={FilterIcon} />
  </Wrapper>
);

export default Summary;
