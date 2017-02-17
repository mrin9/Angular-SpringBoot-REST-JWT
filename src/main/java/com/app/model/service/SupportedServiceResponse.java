package com.app.model.service;

import java.util.*;
import io.swagger.annotations.*;
import com.app.model.*;
import lombok.*;

@Data
@EqualsAndHashCode(callSuper=false)
public class SupportedServiceResponse extends PageResponse {
  @ApiModelProperty(required = true, value = "")
  private List<SupportedServiceModel> items;
}
