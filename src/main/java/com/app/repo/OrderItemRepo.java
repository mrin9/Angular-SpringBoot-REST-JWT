package com.app.repo;

import org.springframework.data.domain.*;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;
import java.util.*;
import com.app.model.order.*;


public interface OrderItemRepo extends JpaRepository<OrderItem, Long> {
    public List<OrderItem> findAll();
    public Page<OrderItem> findAll(Pageable p);
}

