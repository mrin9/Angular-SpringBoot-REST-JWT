package com.app.model.policy;

import java.util.*;
import io.swagger.annotations.*;
import com.app.model.*;
import lombok.*;

@Data
@EqualsAndHashCode(callSuper=false)
public class PolicyDetailResponse extends PageResponse {
  @ApiModelProperty(required = true, value = "")
  private List<PolicyDetailModel> items;
}
