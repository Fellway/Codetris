package com.codetris.api.v1;

import com.codetris.dto.response.ProjectResponse;
import com.codetris.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/projects")
public class ProjectsController {

    private ProjectService projectService;

    @Autowired
    public ProjectsController(final ProjectService projectService) {
        this.projectService = projectService;
    }

    @GetMapping
    public ResponseEntity<Page<ProjectResponse>> getPaginatedProjects(
            @RequestParam(required = false, defaultValue = "0") final Integer page,
            @RequestParam(required = false, defaultValue = "10") final Integer size) {
        return ResponseEntity.ok(projectService.getPaginatedProjects(page, size));
    }
}
