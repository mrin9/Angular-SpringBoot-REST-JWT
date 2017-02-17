package com.app.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.app.model.security.User;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findOneByUserId(String userId);
    Optional<User> findOneByUserIdAndPassword(String userId, String password);
}

