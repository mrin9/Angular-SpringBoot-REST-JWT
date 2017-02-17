package com.app.api.policy;

import java.util.List;
//import com.app.model.*;
import com.app.model.policy.*;
//import com.google.common.base.Strings;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import com.app.repo.policy.*;
//import com.app.model.policy.*;
//import org.springframework.context.annotation.Bean;
//import java.util.*;

@Service
public class ActionService {

  @Autowired
  private ActionRepo actionRepo;

	public List<ActionModel> getAllPolicyActions(){
			//List<ActionModel> actionList = actionRepo.findAllByOrderByNameAsc();
      List<ActionModel> actionList = actionRepo.findAll();
			return actionList;
	}

	public boolean insertOrSaveAction(ActionModel action) {
		this.actionRepo.save(action);
		return true;
	}

	public boolean addNewAction(ActionModel action) {
    /*
		User newAction = this.getActionByName(action.getName());
		if (newUser.getUserName().equals("new")){
			// This means the username is not found therfore its is returning a default value of "new"
			return this.insertOrSaveUser(user);
		}
		else{
			return false;
		}
    */
    return false;
	}


}
