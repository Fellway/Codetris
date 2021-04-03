package com.codetris.configuration.filter;

import com.codetris.api.v1.exception.ApiError;
import com.codetris.api.v1.exception.ApiRestError;
import com.codetris.api.v1.exception.UnauthorizedException;
import com.codetris.configuration.security.JwtTokenUtils;
import com.codetris.service.JwtUserDetailsService;
import io.jsonwebtoken.ExpiredJwtException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import org.springframework.web.servlet.HandlerExceptionResolver;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class JwtRequestFilter extends OncePerRequestFilter  {

    private static final String AUTHORIZATION_HEADER = "Authorization";

    private JwtUserDetailsService userDetailsService;
    private JwtTokenUtils jwtTokenUtils;

    @Autowired
    public JwtRequestFilter(final JwtUserDetailsService userDetailsService, JwtTokenUtils jwtTokenUtils) {
        this.userDetailsService = userDetailsService;
        this.jwtTokenUtils = jwtTokenUtils;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        final String requestTokenHeader = request.getHeader(AUTHORIZATION_HEADER);
        String jwtToken = null;
        if (requestTokenHeader != null && requestTokenHeader.startsWith("Bearer ")) {
            jwtToken = requestTokenHeader.substring(7);
        }

        if (jwtToken != null) {
            try {
                final UserDetails userDetails = userDetailsService.loadUserByUsername(jwtTokenUtils.getUsername(jwtToken));

                if (jwtTokenUtils.isValid(jwtToken, userDetails)) {
                    UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                    usernamePasswordAuthenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                    SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
                } else {
                    throw new IllegalArgumentException("Invalid JWT token");
                }
            } catch (ExpiredJwtException ex) {
                throw new UnauthorizedException(ApiRestError.JWT_TOKEN_EXPIRED);
            }

        }

        filterChain.doFilter(request, response);
    }
}
