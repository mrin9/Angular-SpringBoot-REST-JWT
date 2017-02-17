package com.app.model.service;

import io.swagger.annotations.*;
import lombok.*;
import java.util.*;
import javax.persistence.*;

//@Entity
//@Table(name = "supported_service")
@Data
public class SupportedServiceModel  {
  //@Id
  private Long   id;
  private String name;
  private String description;
  private Long   platformId;
  private String platformName;

  public SupportedServiceModel (long id, String name, String description, long platformId, String platformName) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.platformId = platformId;
    this.platformName = platformName;
  }

}
