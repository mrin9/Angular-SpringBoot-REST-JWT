package com.app.model.employee;

import io.swagger.annotations.*;
import lombok.*;
import java.util.*;
import com.app.model.response.*;

@Data
@EqualsAndHashCode(callSuper=false)
public class EmployeeResponse extends PageResponse {
  @ApiModelProperty(required = true, value = "")
  private List<Employee> items;
}
