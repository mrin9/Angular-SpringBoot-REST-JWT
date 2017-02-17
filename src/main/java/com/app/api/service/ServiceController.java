package com.app.api.service;

import io.swagger.annotations.*;
//import springfox.documentation.annotations.*;

import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.data.domain.*;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.*;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;

import java.sql.*;
import java.util.*;

import com.app.api.*;
import com.app.model.*;
import com.app.model.service.*;
import static com.app.model.OperationResponse.*;

@RestController
@RequestMapping(value = "/cas", produces = MediaType.APPLICATION_JSON_VALUE)
@Api(tags = {"Service"})
public class ServiceController {

  @Autowired private JdbcTemplate jdbcTemplate;

  @ApiOperation(value = "Supported Services", response = SupportedServiceResponse.class)
  @RequestMapping(value = "/supported-services", method = RequestMethod.GET)
  public SupportedServiceResponse getSupportedServices() {
    SupportedServiceResponse resp = new SupportedServiceResponse();
    resp.setItems(new ArrayList<SupportedServiceModel>());
    String sql = "SELECT ss.id, ss.name, ss.description, ss.supported_platform_id as platform_id, sp.name as platform_name FROM supported_service ss, supported_platform sp where ss.supported_platform_id = sp.id order by name";
    List<Map<String, Object>> list = jdbcTemplate.queryForList(sql);
    for (Map<String, Object> row : list) {
      resp.getItems().add(new SupportedServiceModel((Integer)row.get("id"), (String)row.get("name"), (String)row.get("description"), (Integer)row.get("platform_id"), (String)row.get("platform_name")));
    }
    return resp;
  }

  @ApiOperation(value = "Supported Platforms", response = PlatformResponse.class)
  @RequestMapping(value = "/supported-platforms", method = RequestMethod.GET)
  public PlatformResponse getSupportedPlatforms() {
    PlatformResponse resp = new PlatformResponse();
    resp.setItems(new ArrayList<PlatformModel>());
    String sql = "SELECT id, name  FROM supported_platform order by name";
    List<Map<String, Object>> list = jdbcTemplate.queryForList(sql);
    for (Map<String, Object> row : list) {
      resp.getItems().add(new PlatformModel((Integer)row.get("id"), (String)row.get("name")));
    }
    return resp;
  }

}
