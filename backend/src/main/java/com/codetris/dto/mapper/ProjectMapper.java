package com.codetris.dto.mapper;

import com.codetris.dto.response.ProjectResponse;
import com.codetris.model.db.ProjectEntity;

import java.util.List;
import java.util.stream.Collectors;

public class ProjectMapper {

    public static List<ProjectResponse> mapProjectCollection(final List<ProjectEntity> projectCollection) {
        return projectCollection.stream().map(ProjectMapper::mapToDto).collect(Collectors.toList());
    }

    private static ProjectResponse mapToDto(final ProjectEntity projectEntity) {
        return ProjectResponse.builder()
                .name(projectEntity.getName())
                .avatar(projectEntity.getAvatar())
                .priority(projectEntity.getPriority())
                .beginDate(projectEntity.getBeginDate())
                .endDate(projectEntity.getEndDate())
                .description(projectEntity.getDescription())
                .build();
    }
}
