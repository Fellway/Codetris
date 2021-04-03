package com.codetris.api.v1;

import com.codetris.api.v1.exception.ApiError;
import com.codetris.api.v1.exception.UnauthorizedException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.HandlerMapping;

import javax.servlet.http.HttpServletRequest;

import static org.springframework.http.HttpStatus.UNAUTHORIZED;

@RestControllerAdvice
public class ExceptionHandlerController {

    @ResponseBody
    @ResponseStatus(code = UNAUTHORIZED)
    @ExceptionHandler(UnauthorizedException.class)
    public ApiError handleUnauthorizedException(final UnauthorizedException e, final HttpServletRequest request) {
        return new ApiError(UNAUTHORIZED.value(), getSource(request), e.getMessage(), e.getCode());
    }

    private String getSource(final HttpServletRequest request) {
        String source;
        try {
            source = request.getAttribute(HandlerMapping.PATH_WITHIN_HANDLER_MAPPING_ATTRIBUTE).toString();
        } catch (Exception e) {
            source = "Unknown source";
        }
        return source;
    }
}
