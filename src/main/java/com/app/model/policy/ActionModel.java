package com.app.model.policy;

import io.swagger.annotations.*;
import lombok.*;
import javax.persistence.*;
import java.util.*;

@Entity
@Data
public class ActionModel  {

  public enum ActionTypeEnum { DELETE, RENAME, MOVE, NOTIFY, CHECK_FOR_VIRUS, CHECK_FOR_SPAM};

  @Id @GeneratedValue(strategy=GenerationType.IDENTITY)
  private long actionId;
  private String name = null;
  private String description = null;
  private ActionTypeEnum actionType = null;

  public ActionModel(){}

  public ActionModel(String actionName, String description, ActionTypeEnum type){
      this.setName(actionName);
      this.setDescription(description);
      this.setActionType(type);
  }

}
