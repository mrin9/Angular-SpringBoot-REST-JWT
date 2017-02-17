package com.app.model.policy;

import io.swagger.annotations.*;
import lombok.*;
import java.util.*;
import javax.persistence.*;

//@Entity
//@Table(name = "policy_type")
@Data
public class PolicyTypeModel  {
  //@Id
  private Long   id;
  private String name;

  public PolicyTypeModel(long id, String name){
    this.id = id;
    this.name = name;
  }

}
