import React from 'react';
import styled from 'styled-components';
import * as moment from 'moment';
import PropTypes from 'prop-types';
import Header from '../atoms/Header/Header';
import ProjectCard from '../molecules/ProjectCard/ProjectCard';
import AddButton from '../atoms/AddButton/AddButton';
import CardGrid from '../molecules/CardGrid/CardGrid';
import Modal from '../molecules/Modal/Modal';
import Sort from '../molecules/Sort/Sort';

const Wrapper = styled.div`
  padding-right: 40px;
  padding-bottom: 50px;
`;

const ToolBar = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  margin: 50px 0;
`;

class ProjectsTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isModalOpen: false };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState((prevState) => ({
      isModalOpen: !prevState.isModalOpen,
    }));
  }

  render() {
    const { isModalOpen } = this.state;
    const { projects } = this.props;
    return (
      <>
        {isModalOpen && <Modal onSave={this.toggleModal} onClose={this.toggleModal} />}
        <AddButton onClick={this.toggleModal} />
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
        </Wrapper>
      </>
    );
  }
}

ProjectsTemplate.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.obj).isRequired,
};

export default ProjectsTemplate;
