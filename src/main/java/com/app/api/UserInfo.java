package com.app.api;

import io.swagger.annotations.*;
import org.springframework.web.bind.annotation.*;

import org.springframework.http.*;
import org.springframework.beans.factory.annotation.Autowired;

import javax.servlet.http.HttpServletRequest;
import com.google.common.base.Strings;
import org.apache.commons.io.IOUtils;
import org.json.*;

import com.app.model.*;
import com.app.model.security.*;
import static com.app.model.OperationResponse.*;


@RestController
@Api(tags = {"Common"})
public class UserInfo {

	@Autowired
	private UserInfoService userInfoService;

	@ApiOperation(value = "Gets current user information", response = UserInfoResponse.class)
	@RequestMapping(value = "/user", method = RequestMethod.GET, produces = {"application/json"})
	public UserInfoResponse getUserInformation(@RequestParam(value = "name", required = false) String userIdParam, HttpServletRequest req) {

		String loggedInUserId = userInfoService.getLoggedInUserId();

		User user;
		boolean provideUserDetails = false;

		if (Strings.isNullOrEmpty(userIdParam)) {
			provideUserDetails = true;
			user = userInfoService.getLoggedInUser();
		}
		else if (loggedInUserId.equals(userIdParam)) {
			provideUserDetails = true;
			user = userInfoService.getLoggedInUser();
		}
		else {
			//Check if the current user is superuser then provide the details of requested user
			provideUserDetails = true;
			user = userInfoService.getUserInfoByUserId(userIdParam);
		}

		UserInfoResponse resp = new UserInfoResponse();
		if (provideUserDetails) {
      resp.setOperationStatus(ResponseStatusEnum.SUCCESS);
		}
		else {
      resp.setOperationStatus(ResponseStatusEnum.NO_ACCESS);
			resp.setOperationMessage("No Access");
		}
		resp.setData(user);
		return resp;
	}


	@ApiOperation(value = "Add new user", response = OperationResponse.class)
	@RequestMapping(value = "/user", method = RequestMethod.POST, produces = {"application/json"})
	public OperationResponse addNewUser(@RequestBody User user, HttpServletRequest req) {
		boolean userAddSuccess = userInfoService.addNewUser(user);
		OperationResponse resp = new OperationResponse();
		if (userAddSuccess==true){
      resp.setOperationStatus(ResponseStatusEnum.SUCCESS);
			resp.setOperationMessage("User Added");
		}
		else{
      resp.setOperationStatus(ResponseStatusEnum.ERROR);
			resp.setOperationMessage("Unable to add user");
		}
		return resp;
	}


}
