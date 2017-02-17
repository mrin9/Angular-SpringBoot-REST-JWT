package com.app.model.security;

import com.app.model.*;
import lombok.*;

@Data
@EqualsAndHashCode(callSuper=false)
public class UserInfoResponse extends OperationResponse {
    private User data = new User();
}
