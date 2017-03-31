package com.app.repo;

import org.springframework.data.domain.*;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;
import java.util.*;
import com.app.model.order.*;


public interface OrderRepo extends JpaRepository<Order, Integer> {
    public List<Order> findAll();
    public Page<Order> findAll(Pageable p);

}

