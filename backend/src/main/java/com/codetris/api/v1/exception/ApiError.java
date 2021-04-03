package com.codetris.api.v1.exception;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ApiError {
    private Integer status;
    private String source;
    private Integer code;
    private String message;


    public ApiError(final Integer status, final String source, final String message, final Integer code) {
        this.status = status;
        this.source = source;
        this.message = message;
        this.code = code;
    }
}
