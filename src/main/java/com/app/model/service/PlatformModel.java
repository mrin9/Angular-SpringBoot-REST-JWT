package com.app.model.service;

import io.swagger.annotations.*;
import lombok.*;
import java.util.*;
import javax.persistence.*;

//@Entity
//@Table(name = "supported_platform")
@Data
public class PlatformModel  {
  //@Id
  private Long   id;
  private String name;

  public PlatformModel (long id, String name) {
    this.id = id;
    this.name = name;
  }

}
