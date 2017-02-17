package com.app.api;

import io.swagger.annotations.*;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;

import com.app.repo.*;
import com.app.model.*;
import com.app.model.security.*;


/*
This is a dummy rest controller, for the purpose of documentation (/session) path is map to a filter
 - This will only be invoked if security is disabled
 - If Security is enabled then SessionFilter.java is invoked
 - Enabling and Disabling Security is done at config/applicaton.properties 'security.ignored=/**'
*/

@RestController
@Api(tags = {"Authentication"})
public class Session {

  @Autowired
  private UserViewRepo userViewRepo;

  @ApiResponses(value = { @ApiResponse(code = 200, message = "Will return a security token, which must be passed in every request", response = SessionResponse.class) })
  @RequestMapping(value = "/session", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
  @ResponseBody
  public SessionResponse newSession(@RequestBody LoginModel loginDetails, HttpServletRequest request, HttpServletResponse response) {
      System.out.format("\n /Session Called username=%s\n", loginDetails.getUsername());
      UserView user = userViewRepo.findOneByUserIdAndPassword(loginDetails.getUsername(), loginDetails.getPassword()).orElse(null);
      SessionResponse r = new SessionResponse();
      if (user != null){
        System.out.format("\n /User Details=%s\n", user.getFirstName());
        r.setToken("xxx.xxx.xxx");
        r.setFirstName(user.getFirstName());
        r.setLastName(user.getLastName());
        r.setEmail(user.getEmail());
        r.setRole(user.getRole());
        r.setCustomerId(user.getCustomerId());
        r.setServiceProviderId(user.getSecurityProviderId());
        r.setCustomer(user.getCustomer());
        r.setServiceProvider(user.getSecurityProvider());
      }
      else{
          r.setToken("INVALID");
      }
      return r;
  }

}
