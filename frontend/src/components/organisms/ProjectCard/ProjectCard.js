import React from 'react';
import styled from 'styled-components';
import { theme } from 'theme/MainTheme';
import Avatar from 'components/atoms/Avatar/Avatar';
import Header from 'components/atoms/Header/Header';
import Link from 'components/atoms/Link/Link';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import ProgressBar from 'components/atoms/ProgressBar/ProgressBar';
import LeftTimeLabel from 'components/atoms/LeftTimeLabel/LeftTimeLabel';
import Contributors from 'components/molecules/Contributors/Contributors';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  color: ${theme.grey100};
  padding: 25px;
  border-radius: 10px;
  background-color: ${theme.grey450};
  border: 1px solid ${theme.grey400};
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.7), 0 15px 12px rgba(0, 0, 0, 0.22);
    cursor: pointer;
  }
`;

const StyledAvatar = styled(Avatar)`
  height: 60px;
  width: 60px;
  margin-bottom: 15px;
`;

const StyledParagraph = styled(Paragraph)`
  margin: 25px 0;
`;

const Footer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const ProjectCard = ({ name, avatar, link, description, progress, leftTime }) => (
  <Wrapper>
    <StyledAvatar url={avatar} />
    <Header s>{name}</Header>
    <Link href="www.sports-interactive.com">{link}</Link>
    <StyledParagraph>{description}</StyledParagraph>
    <ProgressBar>{progress}</ProgressBar>
    <Footer>
      <LeftTimeLabel>{leftTime}</LeftTimeLabel>
      <Contributors />
    </Footer>
  </Wrapper>
);

export default ProjectCard;

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  leftTime: PropTypes.number.isRequired,
};
