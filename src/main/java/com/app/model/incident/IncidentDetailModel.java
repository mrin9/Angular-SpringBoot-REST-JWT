package com.app.model.incident;

import io.swagger.annotations.*;
import lombok.*;
import java.util.*;
import javax.persistence.*;

@Data
@Entity
@Table(name = "incident_detail")
public class IncidentDetailModel  {

  public enum IncidentStatusEnum {CRITICAL, ALERT, WARNING, INFO};


  @Id
  private Integer incidentId;
  private Integer policyId;
  private Date    detectedOn;
  private Integer eventId;
  private String  ownerEmail;
  private String  ownerName;
  private String  platformUser;
  private String  policyType;
  @ApiModelProperty(allowableValues = "NEW, IN_PROGRESS, DISMISSED, RESOLVED")
  private String status;
  //private IncidentStatusEnum status = null;

  @ApiModelProperty(allowableValues = "ALERT, INFO, WARNING, CRITICAL")
  private String  severity;
  private String  customerName;
  private Integer securityProviderId;
  private String  securityProviderName;
  private String  platformName;
}
