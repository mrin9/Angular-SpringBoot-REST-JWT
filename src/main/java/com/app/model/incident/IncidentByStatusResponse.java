package com.app.model.incident;

import io.swagger.annotations.*;
import com.app.model.*;
import lombok.*;


@Data
@EqualsAndHashCode(callSuper=false)
public  class IncidentByStatusResponse extends OperationResponse {
  @ApiModelProperty(required = true, value = "")
  private IncidentByStatusModel content;
}

