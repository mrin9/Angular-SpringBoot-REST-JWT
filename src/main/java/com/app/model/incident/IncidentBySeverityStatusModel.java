package com.app.model.incident;
import lombok.*;

@Data
public  class IncidentBySeverityStatusModel{
  private IncidentByStatusModel alert;
  private IncidentByStatusModel info;
  private IncidentByStatusModel critical;
  private IncidentByStatusModel warning;
}

