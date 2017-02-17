package com.app.model.policy;

import io.swagger.annotations.*;
import lombok.*;
import java.util.*;


@Data
//@Entity
//@Table(name = "policy_detail")
public class PolicyDetailModel  {

  public enum PolicySeverityEnum {CRITICAL, ALERT, WARNING, INFO};
  public enum PolicyStateEnum    {ACTIVE, INACTIVE};

  //@Id
  private long   policyId;
  private String policyName;
  private String policyType;
  //private PolicyStateEnum policyState;
  //private PolicySeverityEnum severity;
  @ApiModelProperty(allowableValues = "ACTIVE, INACTIVE")
  private String policyState;
  @ApiModelProperty(allowableValues = "CRITICAL, ALERT, WARNING, INFO")
  private String severity;
  private List<Rule> rules;
  public PolicyDetailModel(){}

  public PolicyDetailModel( long policyId, String policyName, String policyType, String policyState, String severity ){
    this.policyId     = policyId;
    this.policyName   = policyName;
    this.policyType   = policyType;
    this.policyState  = policyState;
    this.severity     = severity;
    this.rules        = new ArrayList<Rule>();
  }

  public void addRule( long ruleId, String ruleName, String condition, String fieldName, String operator, String value1, String value2){
      Rule r = new Rule(ruleId, ruleName, condition, fieldName, operator, value1, value2);
      this.rules.add(r);
  }
}

@Data
class Rule  {
  private long   ruleId;
  private String ruleName;
  private String condition;
  private String fieldName;
  private String operator;
  private String value1;
  private String value2;

  public Rule(long ruleId, String ruleName, String condition, String fieldName, String operator, String value1, String value2){
    this.ruleId    = ruleId;
    this.ruleName  = ruleName;
    this.condition = condition;
    this.fieldName = fieldName;
    this.operator  = operator;
    this.value1    = value1;
    this.value2    = value2;
  }

}

