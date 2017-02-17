package com.app.api.policy;

import io.swagger.annotations.*;
//import springfox.documentation.annotations.*;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.*;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;

import org.springframework.web.multipart.MultipartFile;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.*;

import java.sql.*;
import java.util.*;

import com.app.api.*;
import com.app.model.*;
import com.app.model.policy.*;
import com.app.repo.policy.*;
import static com.app.model.OperationResponse.*;

@RestController
@RequestMapping(value = "/cas", produces = MediaType.APPLICATION_JSON_VALUE)
@Api(tags = {"Policy"})
public class PolicyTypeController {

  @Autowired private JdbcTemplate jdbcTemplate;

  @ApiOperation(value = "Policy Types", response = PolicyTypeResponse.class)
  @RequestMapping(value = "/policy-types", method = RequestMethod.GET)
  public PolicyTypeResponse getPolicyTypes() {
    PolicyTypeModel policyType;
    PolicyTypeResponse resp = new PolicyTypeResponse();
    resp.setItems(new ArrayList<PolicyTypeModel>());
    String sql = "SELECT id, name from policy_type order by id";
    List<Map<String, Object>> list = jdbcTemplate.queryForList(sql);
    for (Map<String, Object> row : list) {
      resp.getItems().add(new PolicyTypeModel((Integer)row.get("id"), (String)row.get("name")));
    }
    resp.setPageTotal(list.size(), true);
    return resp;
  }


}
