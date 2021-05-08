package com.codetris.service;

import com.codetris.dto.mapper.ProjectMapper;
import com.codetris.dto.response.ProjectResponse;
import com.codetris.model.db.ProjectEntity;
import com.codetris.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectService {

    private final ProjectRepository projectRepository;

    @Autowired
    public ProjectService(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    public Page<ProjectResponse> getPaginatedProjects(final int page, final int size) {
        final Pageable pageable = PageRequest.of(page, size);
        final Page<ProjectEntity> projectsPage = projectRepository.findAll(pageable);
        final List<ProjectResponse> projects = ProjectMapper.mapProjectCollection(projectsPage.getContent());

        return new PageImpl<>(projects, pageable, projectsPage.getTotalPages());
    }
}
