package com.app.api.policy;

import com.app.api.*;
import io.swagger.annotations.*;
//import springfox.documentation.annotations.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.RowMapper;

import java.sql.Types;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.dao.EmptyResultDataAccessException;

import org.springframework.web.multipart.MultipartFile;
import org.springframework.data.domain.*;
import org.springframework.http.*;
import static com.app.model.OperationResponse.*;
import java.util.*;
import com.app.model.*;
import com.app.model.policy.*;
import com.app.repo.policy.*;
import com.github.javafaker.Faker;

@RestController
@RequestMapping(value = "/cas", produces = MediaType.APPLICATION_JSON_VALUE)
@Api(tags = {"Policy"})
public class PolicyController {

  @Autowired private JdbcTemplate jdbcTemplate;
	@Autowired private ActionService policyActionService;

  @ApiOperation(value = "List of Policy Actions",  response = ActionResponse.class)
  @RequestMapping(value = "/actions", method = RequestMethod.GET)
  public ActionResponse getPolicyActions()  {
      ActionResponse resp = new ActionResponse();
      List<ActionModel> actionList = policyActionService.getAllPolicyActions();
      resp.setPageTotal(actionList.size(), true);
      return resp;
  }

  @ApiOperation(value = "Policy Details", response = PolicyDetailResponse.class)
  @RequestMapping(value = "/policies", method = RequestMethod.GET)
  public PolicyDetailResponse getPolicies(
    @RequestParam(value = "policyid"    , required = false) Integer policyId
  ) {
    long prevPolicyId = -1, newPolicyId;
    PolicyDetailModel p = new PolicyDetailModel();
    int itemCount=0;

    PolicyDetailResponse resp = new PolicyDetailResponse();
    resp.setItems(new ArrayList<PolicyDetailModel>());
    String sql = "SELECT policy_id, policy_name, policy_type, policy_state, severity, rule_id, rule_name, customer_name, rule_condition, field_name, operator, value1, value2 from policy_detail ";
    String where = " where 1 = 1 ";
    String order = " order by policy_id, rule_id ";
    if (policyId != null){
      where = where + " and policy_id = " + policyId;
    }

    List<Map<String, Object>> list = jdbcTemplate.queryForList(sql + where + order);
    for (Map<String, Object> row : list) {
      newPolicyId = (int)row.get("policy_id");
      if (prevPolicyId != newPolicyId){
        itemCount++;
        p = new PolicyDetailModel(
          (int)row.get("policy_id"),
          (String)row.get("policy_name"),
          (String)row.get("policy_type"),
          (String)row.get("policy_state"),
          (String)row.get("severity")
        );

        p.addRule(
          (int)row.get("rule_id"),
          (String)row.get("rule_name"),
          (String)row.get("rule_condition"),
          (String)row.get("field_name"),
          (String)row.get("operator"),
          (String)row.get("value1"),
          (String)row.get("value2")
        );
        resp.getItems().add(p);
        prevPolicyId = newPolicyId;
      }
      else{
        p.addRule(
          (int)row.get("rule_id"),
          (String)row.get("rule_name"),
          (String)row.get("rule_condition"),
          (String)row.get("field_name"),
          (String)row.get("operator"),
          (String)row.get("value1"),
          (String)row.get("value2")
        );
      }
    }
    resp.setPageTotal(itemCount, true);
    return resp;
  }

  @ApiOperation(value = "Update Policy State", response = OperationResponse.class)
  @RequestMapping(value = "/policies/{policyId}/state", method = RequestMethod.PUT)
  public OperationResponse updatePolicyState( @PathVariable Long policyId, @RequestBody String newState) {
    OperationResponse resp = new OperationResponse();
    PolicyModel objPolicy = new PolicyModel();

    newState = newState.toUpperCase();
    if (newState.equalsIgnoreCase("ACTIVE") || newState.equalsIgnoreCase("INACTIVE")){
      try{
        objPolicy = this.getPolicyById(policyId);
        if (objPolicy.getState().equalsIgnoreCase(newState)){
          resp.setOperationStatus(ResponseStatusEnum.SUCCESS);
          resp.setOperationMessage("State Unchanged : Previous and New states are same ");
        }
        else {
          Object[] updateParams = {newState, policyId};
          int rows = jdbcTemplate.update("Update policy set state = ? where id = ?", updateParams);
          resp.setOperationMessage("State Updated to " + newState);
          resp.setOperationStatus(ResponseStatusEnum.SUCCESS);
        }
      }
      catch (EmptyResultDataAccessException ex) {
        resp.setOperationStatus(ResponseStatusEnum.ERROR);
        resp.setOperationMessage("Policy with id " + policyId + " Not found");
      }
    }
    else{
      resp.setOperationStatus(ResponseStatusEnum.ERROR);
      resp.setOperationMessage("Invalid value for state provided only 'ACTIVE' and 'INACTIVE' are allowed");
    }
    return resp;
  }


  @ApiOperation(value = "Update Policy Severity", response = OperationResponse.class)
  @RequestMapping(value = "/policies/{policyId}/severity", method = RequestMethod.PUT)
  public OperationResponse updatePolicySeverity( @PathVariable Long policyId, @RequestBody String newSeverity) {
    OperationResponse resp = new OperationResponse();
    PolicyModel objPolicy = new PolicyModel();

    newSeverity = newSeverity.toUpperCase();
    if (newSeverity.equals("CRITICAL") || newSeverity.equals("ALERT")|| newSeverity.equals("WARNING")|| newSeverity.equals("INFO")){
      try{
        objPolicy = this.getPolicyById(policyId);
        if (objPolicy.getSeverity().equals(newSeverity)){
          resp.setOperationStatus(ResponseStatusEnum.SUCCESS);
          resp.setOperationMessage("Severity Unchanged : Previous and New severity are same ");
        }
        else {
          Object[] updateParams = {newSeverity, policyId};
          int rows = jdbcTemplate.update("Update policy set severity = ? where id = ?", updateParams);
          resp.setOperationMessage("State Updated to " + newSeverity);
          resp.setOperationStatus(ResponseStatusEnum.SUCCESS);
        }
      }
      catch (EmptyResultDataAccessException ex) {
        resp.setOperationStatus(ResponseStatusEnum.ERROR);
        resp.setOperationMessage("Policy with id " + policyId + " Not found");
      }
    }
    else{
      resp.setOperationStatus(ResponseStatusEnum.ERROR);
      resp.setOperationMessage("Invalid value for severity provided only CRITICAL, ALERT, WARNING, INFO are allowed");
    }
    return resp;
  }


  private PolicyModel getPolicyById(Long policyId) throws EmptyResultDataAccessException {
    PolicyModel objPolicy = new PolicyModel();
    String sql = "SELECT id, name, description, state, severity, created_by, updated_by, created, updated, policy_type_id, customer_id from policy where id = ? ";
    objPolicy = jdbcTemplate.queryForObject(sql, new Object[]{policyId} , new PolicyRowMapper());
    return objPolicy;
  }

}

//Row Mapper Classes for various Model (Used by JDBCTemplate query methods)
class PolicyRowMapper implements RowMapper<PolicyModel> {
  @Override
	public PolicyModel mapRow(ResultSet rs, int rowNum) throws SQLException {
		PolicyModel p = new PolicyModel();
		p.setId(rs.getInt("ID"));
		p.setName(rs.getString("NAME"));
		p.setDescription(rs.getString("DESCRIPTION"));
    p.setState(rs.getString("STATE"));
    p.setSeverity(rs.getString("SEVERITY"));
    p.setCreatedBy(rs.getString("CREATED_BY"));
    p.setUpdatedBy(rs.getString("UPDATED_BY"));
    p.setCreated(rs.getDate("CREATED"));
    p.setUpdated(rs.getDate("UPDATED"));
    p.setCustomerId(rs.getLong("CUSTOMER_ID"));
		return p;
	}

}
