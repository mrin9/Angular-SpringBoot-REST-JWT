package com.app.model.user;

import io.swagger.annotations.*;
import lombok.*;

@Data
public class Login  {

  @ApiModelProperty(example = "demo", required = true)
  private String username = "";

  @ApiModelProperty(example = "demo", required = true)
  private String password = "";

}
