package com.app.model.security;
import io.swagger.annotations.*;
import lombok.*;

@Data
public class SessionResponse {
  @ApiModelProperty(example = "xxx.xxx.xxx", required = true)
  private String token = "xxx.xxx.xxx";
  private String firstName;
  private String LastName;
  private String email;
  private String role;
  private String customer;
  private String serviceProvider;
  private int customerId;
  private int serviceProviderId;
}
