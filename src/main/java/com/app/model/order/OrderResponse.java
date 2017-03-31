package com.app.model.order;

import io.swagger.annotations.*;
import lombok.*;
import java.util.*;
import com.app.model.response.*;

@Data
@EqualsAndHashCode(callSuper=false)
public class OrderResponse extends PageResponse {
  @ApiModelProperty(required = true, value = "")
  private List<Order> items;
}
