package com.codetris.api.v1.exception;

import lombok.Getter;

@Getter
public class AbstractNetException extends RuntimeException {
    private static final int DEFAULT_ERROR_CODE = -1;
    private final int code;

    public AbstractNetException(final String message) {
        super(message);
        this.code = DEFAULT_ERROR_CODE;
    }

    public AbstractNetException(final String message, final int code) {
        super(message);
        this.code = code;
    }
}
