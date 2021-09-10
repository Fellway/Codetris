import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  @media (max-width: 1020px) {
    grid-template-columns: repeat(3, 1fr);
  }
  grid-gap: 50px;
`;

const CardGrid = ({ children }) => <Wrapper>{children}</Wrapper>;

export default CardGrid;

CardGrid.propTypes = {
  children: PropTypes.arrayOf(PropTypes.obj).isRequired,
};
