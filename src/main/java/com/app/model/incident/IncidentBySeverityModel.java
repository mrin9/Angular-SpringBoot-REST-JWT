package com.app.model.incident;

import io.swagger.annotations.*;
import lombok.*;
import java.util.*;


@Data
public  class IncidentBySeverityModel  {
  private long alert;
  private long info;
  private long critical;
  private long warning;
}

