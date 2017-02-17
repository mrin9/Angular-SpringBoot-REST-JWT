package com.app.repo.incident;

import org.springframework.data.domain.*;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;
import java.util.*;
import com.app.model.incident.*;

public interface IncidentRepo extends JpaRepository<IncidentModel, Long> {
    public List<IncidentModel> findAll();
    public Page<IncidentModel> findAll(Pageable p);

}


