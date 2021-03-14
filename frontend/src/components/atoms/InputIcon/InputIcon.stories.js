import React from 'react';
import LoupeIcon from 'assets/loupe.svg';
import InputIcon from './InputIcon';

export default {
  title: 'Components/atoms/InputIcon',
  component: InputIcon,
};

export const SearchInput = () => <InputIcon placeholder="search..." icon={LoupeIcon} />;
