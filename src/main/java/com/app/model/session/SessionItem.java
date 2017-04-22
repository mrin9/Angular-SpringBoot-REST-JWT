package com.app.model.session;

import lombok.*;
import java.util.*;
import io.swagger.annotations.ApiModelProperty;

@Data
public class SessionItem {
    private String  token;
    private String  userId;
    private String  firstName;
    private String  lastName;
    private String  email;
    private List<String> roles;
}
