package com.app.api;

import java.util.List;
import com.app.model.*;
import com.google.common.base.Strings;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import com.app.repo.UserRepository;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import org.springframework.context.annotation.Bean;
import com.app.model.security.*;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;


@Service
public class UserInfoService {

  @Autowired
  private UserRepository userRepo;

	public String getLoggedInUserId(){
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		return auth.getName();
	}


	public User getLoggedInUser() {
		String loggedInUserId = this.getLoggedInUserId();
		System.out.format("\n1. Inside >> getLoggedInUser: %s", loggedInUserId);
		User user = this.getUserInfoByUserId(loggedInUserId);
		System.out.format("\n2. After Find User: %s", loggedInUserId);
		return user;
	}

	public User getUserInfoByUserId(String userId){
			User user = this.userRepo.findOneByUserId(userId).orElseGet( () -> new User());
			return user;
	}

	public boolean insertOrSaveUser(User user) {
		this.userRepo.save(user);
		return true;
	}

	public boolean addNewUser(User user) {
		User newUser = this.getUserInfoByUserId(user.getUserId());
		if (newUser.getUserId().equals("new")){
			// This means the username is not found therfore its is returning a default value of "new"
			return this.insertOrSaveUser(user);
		}
		else{
			return false;
		}
	}

}
