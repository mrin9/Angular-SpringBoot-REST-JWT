package com.app.model.policy;

import io.swagger.annotations.*;
import lombok.*;
import java.util.*;
import javax.persistence.*;

//@Entity
//@Table(name = "policy_detail")
@Data
public class PolicyModel  {

  //@Id
  private long   id;
  private String name;
  private String description;

  @ApiModelProperty(allowableValues = "ACTIVE, INACTIVE")
  private String state;

  @ApiModelProperty(allowableValues = "CRITICAL, ALERT, WARNING, INFO")
  private String severity;

  private String createdBy;
  private String updatedBy;
  private long   customerId;
  private long   policyTypeId;
  private Date updated = null;
  private Date created = null;

  public PolicyModel(){}

}
