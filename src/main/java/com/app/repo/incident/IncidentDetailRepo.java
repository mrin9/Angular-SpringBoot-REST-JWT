package com.app.repo.incident;

import org.springframework.data.domain.*;
import org.springframework.data.jpa.repository.*;
import java.util.Optional;
import java.util.*;
import com.app.model.incident.*;

public interface IncidentDetailRepo extends JpaRepository<IncidentDetailModel, Long>, JpaSpecificationExecutor {
    //public List<IncidentDetailModel> findAll();
    //public Page<IncidentDetailModel> findAll(Pageable p);
    //public Page<IncidentDetailModel> findFirst1000ByCustomerIdOrderByDetectedOnDesc(long customerId, Pageable p);
}


