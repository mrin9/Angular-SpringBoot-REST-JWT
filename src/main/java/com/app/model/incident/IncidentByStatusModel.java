package com.app.model.incident;

import lombok.*;

@Data
public  class IncidentByStatusModel  {
  private long newStatus;
  private long inProgress;
  private long dismissed;
  private long resolved;
}

