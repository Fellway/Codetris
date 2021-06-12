import React from 'react';
import styled from 'styled-components';
import { Sort } from '@material-ui/icons';
import * as moment from 'moment';
import PropTypes from 'prop-types';
import Header from '../atoms/Header/Header';
import ProjectCard from '../molecules/ProjectCard/ProjectCard';
import AddButton from '../atoms/AddButton/AddButton';

const Wrapper = styled.div`
  padding-right: 40px;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  @media (max-width: 1020px) {
    grid-template-columns: repeat(3, 1fr);
  }
  grid-gap: 50px;
`;

const ToolBar = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  margin: 50px 0;
`;

const ProjectsTemplate = ({ projects }) => (
  <Wrapper>
    <ToolBar>
      <Header s>All visible Projects</Header>
      <Sort />
    </ToolBar>
    <CardGrid>
      {projects.map(({ id, name, description, beginDate, endDate, avatar }) => {
        const sDate = moment(beginDate);
        const eDate = moment(endDate);
        const diff = Math.round(moment.duration(eDate.diff(sDate)).asDays());
        return (
          <ProjectCard
            id={id}
            name={name}
            leftTime={diff}
            progress="65"
            description={description}
            link="www.sports-interactive.com"
            avatar={avatar}
          />
        );
      })}
    </CardGrid>
    <AddButton />
  </Wrapper>
);

ProjectsTemplate.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.obj).isRequired,
};

export default ProjectsTemplate;
