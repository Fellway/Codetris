package com.codetris.api.v1.exception;

import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
public enum ApiRestError implements IApiError {

    JWT_TOKEN_EXPIRED(2002, "Jwt token expired", HttpStatus.UNAUTHORIZED);

    private final Integer errorCode;
    private final String message;
    private final HttpStatus httpStatus;

    ApiRestError(final Integer errorCode, final String message, final HttpStatus httpStatus) {
        this.errorCode = errorCode;
        this.message = message;
        this.httpStatus = httpStatus;
    }
}
