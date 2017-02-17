package com.app.identity;

import org.springframework.security.core.authority.AuthorityUtils;
import com.app.model.security.Role;
import com.app.model.security.User;
import com.app.model.security.UserView;

public class TokenUser extends org.springframework.security.core.userdetails.User {
    private UserView user;

    //For returning a normal user
    public TokenUser(UserView user) {
        super( user.getUserId(), user.getPassword(), AuthorityUtils.createAuthorityList(user.getRole())  );
        //super(user.getUserName(), user.getPassword(), true, true, true, true,  AuthorityUtils.createAuthorityList(user.getRole().toString()));
        this.user = user;
    }

    public UserView getUser() {
        return user;
    }

    public String getRole() {
        return user.getRole();
    }
}
