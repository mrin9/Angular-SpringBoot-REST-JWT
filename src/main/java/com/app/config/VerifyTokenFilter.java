package com.app.config;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.GenericFilterBean;
import javax.servlet.FilterChain;
import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;
import java.util.*;
import io.jsonwebtoken.JwtException;
import com.app.identity.*;

/*
This filter checks if there is a token in the Request service header and the token is not expired
it is applied to all the routes which are protected
*/
public class VerifyTokenFilter extends GenericFilterBean {

    private final TokenUtil tokenUtil;
    //private AuthenticationFailureHandler loginFailureHandler = new SimpleUrlAuthenticationFailureHandler();

    public VerifyTokenFilter(TokenUtil tokenUtil) {
        this.tokenUtil = tokenUtil;
    }

    @Override
    public void doFilter(ServletRequest req, ServletResponse res, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest  request  = (HttpServletRequest)  req;
        HttpServletResponse response = (HttpServletResponse) res;
        try {
            Optional<Authentication> authentication = tokenUtil.verifyToken(request);
            if (authentication.isPresent()) {
              SecurityContextHolder.getContext().setAuthentication(authentication.get());
            }
            else{
              SecurityContextHolder.getContext().setAuthentication(null);
            }
            filterChain.doFilter(req, res);
        }
        catch (JwtException e) {
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        }
        finally {
            SecurityContextHolder.getContext().setAuthentication(null);
        }
    }

}
