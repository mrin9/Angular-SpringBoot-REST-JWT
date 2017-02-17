package com.app.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.app.model.security.*;
import java.util.Optional;

public interface UserViewRepo extends JpaRepository<UserView, Long> {
    Optional<UserView> findOneByUserId(String userId);
    Optional<UserView> findOneByUserIdAndPassword(String userId, String password);
}

