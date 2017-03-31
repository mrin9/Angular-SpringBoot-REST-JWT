package com.app.repo;

import org.springframework.data.domain.*;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;
import java.util.*;
import com.app.model.order.*;


public interface OrderInfoRepo extends JpaRepository<OrderInfo, Long> {
    public List<OrderInfo> findAll();
    public Page<OrderInfo> findAll(Pageable p);

}

