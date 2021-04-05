import ProjectCard from 'components/organisms/ProjectCard/ProjectCard';
import React from 'react';
import styled from 'styled-components';
import { theme } from 'theme/MainTheme';

const Wrapper = styled.div`
  width: 100%;
  padding-left: 130px;
  padding-right: 40px;
  padding-top: 90px;
  background-color: ${theme.grey500};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 50px;
`;

const Projects = () => (
  <Wrapper>
    <ProjectCard />
    <ProjectCard />
    <ProjectCard />
    <ProjectCard />
    <ProjectCard />
    <ProjectCard />
    <ProjectCard />
    <ProjectCard />
    <ProjectCard />
    <ProjectCard />
    <ProjectCard />
  </Wrapper>
);

export default Projects;
