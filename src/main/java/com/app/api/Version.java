package com.app.api;

import io.swagger.annotations.*;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import static org.springframework.http.MediaType.*;

import com.app.model.VersionModel;

@RestController
@RequestMapping(value = "/version", produces = { "application/json" })
@Api(tags = {"Common"})
public class Version {
  @ApiOperation(value = "Gets the version of the REST API", notes = "", response = VersionModel.class)
  @ApiResponses(value = { @ApiResponse(code = 200, message = "Returns the version info for the REST API.", response = VersionModel.class) })
  @RequestMapping( method = RequestMethod.GET)
  public VersionModel getVersion() {
      //Authentication ath = SecurityContextHolder.getContext().getAuthentication();
      //TokenUser usr = (TokenUser)ath.getDetails();
      //String customerId = usr.getUser().getCustomerId()
      VersionModel r = new VersionModel();
      r.setVersion("1.0.0");
      r.setMajor(1);
      r.setMinor(0);
      r.setPatch(0);
      return r;
  }
}
