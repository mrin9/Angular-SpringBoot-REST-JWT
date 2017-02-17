package com.app.model.security;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import javax.persistence.*;
import lombok.*;
import javax.validation.constraints.*;
import java.util.EnumSet;

@Entity
@Table(name = "user_view")
public class UserView {
    @Id
    @Getter @Setter private String userId;
    @Getter @Setter int customerId;
    @Getter @Setter private String role;
    @Getter @Setter private String password = "";

    @JsonIgnore @Getter @Setter private String firstName;
    @JsonIgnore @Getter @Setter private String lastName;
    @JsonIgnore @Getter @Setter private String email;
    @JsonIgnore @Getter @Setter int securityProviderId;
    @JsonIgnore @Getter @Setter private String securityProvider;
    @JsonIgnore @Getter @Setter private String customer;
    @JsonIgnore @Getter @Setter private boolean isActive;
    @JsonIgnore @Getter @Setter private boolean isBlocked;

    public UserView() {
        this.setUserId("NEW");
        this.setPassword(new BCryptPasswordEncoder().encode(this.password));
        this.setRole("USER");
        this.setFirstName("New ");
        this.setLastName("New ");
    }

    public String getFullName(){
      return this.firstName + " " + this.lastName;
    }
}
