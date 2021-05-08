package com.codetris.dto.response;

import lombok.Builder;
import lombok.Getter;

import java.sql.Date;

@Getter
@Builder
public class ProjectResponse {
    private Integer id;
    private String name;
    private String description;
    private String avatar;
    private String priority;
    private Date beginDate;
    private Date endDate;
}
