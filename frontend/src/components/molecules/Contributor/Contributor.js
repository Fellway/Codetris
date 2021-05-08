import React from 'react';
import styled from 'styled-components';
import Avatar from 'components/atoms/Avatar/Avatar';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import propTypes from 'prop-types';

const Wrapper = styled.div`
  display: grid;
  justify-items: center;

  &:hover {
    cursor: pointer;
  }
`;

const StyledAvatar = styled(Avatar)`
  height: 100px;
  width: 100px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.7), 0 15px 12px rgba(0, 0, 0, 0.22);
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin: 20px 0;
  text-align: center;
`;

const Contributor = ({ url, children }) => (
  <Wrapper>
    <StyledAvatar circle url={url} />
    <StyledParagraph>{children}</StyledParagraph>
  </Wrapper>
);

export default Contributor;

Contributor.propTypes = {
  url: propTypes.string.isRequired,
  children: propTypes.string.isRequired,
};
