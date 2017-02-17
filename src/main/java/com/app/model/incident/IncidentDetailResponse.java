package com.app.model.incident;

import io.swagger.annotations.*;
import com.app.model.*;
import lombok.*;
import java.util.*;

@Data
@EqualsAndHashCode(callSuper=false)
public class IncidentDetailResponse extends PageResponse {
  @ApiModelProperty(required = true, value = "")
  private List<IncidentDetailModel> items;
}
