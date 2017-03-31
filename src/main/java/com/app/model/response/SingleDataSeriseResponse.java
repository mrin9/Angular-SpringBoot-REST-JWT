//This is a common http response model for providing data series

package com.app.model.response;

import lombok.*;
import java.util.*;
import io.swagger.annotations.*;
import com.app.model.data.*;

@Data
@EqualsAndHashCode(callSuper=false)
public class SingleDataSeriseResponse extends OperationResponse {
    private List<SingleSerise> items;
}
