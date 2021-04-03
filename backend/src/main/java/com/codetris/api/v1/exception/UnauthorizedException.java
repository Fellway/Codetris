package com.codetris.api.v1.exception;

public class UnauthorizedException extends AbstractNetException {
    public UnauthorizedException(final IApiError apiError) {
        super(apiError.getMessage(), apiError.getErrorCode());
    }
}
