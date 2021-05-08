import React, { Component } from 'react';
import UserPageTemplate from 'components/templates/UserPageTemplate';
import ProjectTemplate from 'components/templates/ProjectsTemplate';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { fetchProjects } from '../actions';

class Projects extends Component {
  componentDidMount() {
    const { fetchProjects: fetchProjectsAlt } = this.props;
    fetchProjectsAlt();
  }

  render() {
    const { projects } = this.props;
    return (
      <UserPageTemplate>
        <ProjectTemplate projects={projects} />
      </UserPageTemplate>
    );
  }
}

Projects.propTypes = {
  projects: propTypes.arrayOf(propTypes.object),
  fetchProjects: propTypes.func.isRequired,
};

Projects.defaultProps = {
  projects: [],
};

const mapStateToProps = (state) => {
  const { projects } = state;
  return { projects };
};

const mapDispatchToProps = (dispatch) => ({
  fetchProjects: () => dispatch(fetchProjects(0, 10)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
