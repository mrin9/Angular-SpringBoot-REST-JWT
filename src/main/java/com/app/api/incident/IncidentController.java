package com.app.api.incident;

import io.swagger.annotations.*;
//import springfox.documentation.annotations.*;
import org.springframework.http.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.data.domain.*;
//import static org.springframework.http.MediaType.*;

import java.util.*;
import com.github.javafaker.Faker;

import com.app.api.*;
import com.app.model.*;
import com.app.repo.incident.*;
import com.app.model.incident.*;
import com.app.model.incident.IncidentDetailModel.*;
import static com.app.model.OperationResponse.*;


@RestController
@RequestMapping(value = "/cas", produces = MediaType.APPLICATION_JSON_VALUE)
@Api(tags = {"Incidents"})
public class IncidentController {

  @Autowired private JdbcTemplate jdbcTemplate;
	@Autowired private IncidentDetailRepo incidentService;

  @ApiOperation(value = "List of incidents", response = IncidentDetailResponse.class)
  @RequestMapping(value = "/incidents", method = RequestMethod.GET)
  public IncidentDetailResponse getIncidentsByPage(
    @ApiParam(value = ""    )               @RequestParam(value = "page"  ,  defaultValue="0"   ,  required = false) Integer page,
    @ApiParam(value = "between 1 to 1000" ) @RequestParam(value = "size"  ,  defaultValue="20"  ,  required = false) Integer size,
    @RequestParam(value = "incidentid"  , required = false) Integer incidentId,
    @RequestParam(value = "policyid"    , required = false) Integer policyId,
    @RequestParam(value = "platformName", required = false) String platformName,
    @RequestParam(value = "customer"    , required = false) String customer,
    @RequestParam(value = "status"      , required = false) String status,
    @RequestParam(value = "severity"    , required = false) String severity,
    Pageable pageable
  ) {
      IncidentDetailResponse resp = new IncidentDetailResponse();
      IncidentDetailModel qry = new IncidentDetailModel();
      if (incidentId != null)  { qry.setIncidentId(incidentId); }
      if (policyId != null)    { qry.setPolicyId(policyId);     }
      if (customer != null)    { qry.setCustomerName(customer); }
      if (severity != null)    { qry.setSeverity(severity);     }
      if (status != null)      { qry.setStatus(status);         }
      if (platformName != null){ qry.setPlatformName(platformName); }

      //Page<IncidentDetailModel> incidentPage = incidentService.findAll(pageable);
      Page<IncidentDetailModel> incidentPage = incidentService.findAll(org.springframework.data.domain.Example.of(qry), pageable);
      resp.setPageStats(incidentPage, true);
      resp.setItems(incidentPage.getContent());
      return resp;
  }

  @ApiOperation(value = "Incidents by severiry", response = IncidentBySeverityResponse.class)
  @RequestMapping(value = "/incidents-by-severity", method = RequestMethod.GET)
  public IncidentBySeverityResponse getIncidentsBySeverity() {
    String sql = "select count(*) as count, severity from incident_detail group by severity";
    String countType = new String();
    long count;
    IncidentBySeverityResponse resp = new IncidentBySeverityResponse();
    IncidentBySeverityModel incidentBySeverity = new IncidentBySeverityModel();

    List<Map<String, Object>> list = jdbcTemplate.queryForList(sql);
    for (Map<String, Object> row : list) {
        countType = (String)row.get("severity");
        count = (long)row.get("count");
        switch (countType) {
          case "INFO":
            incidentBySeverity.setInfo(count);
            break;
          case "WARNING":
            incidentBySeverity.setWarning(count);
            break;
          case "CRITICAL":
            incidentBySeverity.setCritical(count);
            break;
          case "ALERT":
            incidentBySeverity.setAlert(count);
            break;
        }
    }
    resp.setOperationStatus(ResponseStatusEnum.SUCCESS);
    resp.setOperationMessage("Incident by severity");
    resp.setContent(incidentBySeverity);
    return resp;
  }

  @ApiOperation(value = "Incident by status", response = IncidentByStatusResponse.class)
  @RequestMapping(value = "/incidents-by-status", method = RequestMethod.GET)
  public IncidentByStatusResponse getIncidentsByStatus() {
    String sql = "select count(*) as count, status as status from incident_detail group by status";
    String countType = new String();
    long count;
    IncidentByStatusResponse resp = new IncidentByStatusResponse();
    IncidentByStatusModel incidentByStatus = new IncidentByStatusModel();

    List<Map<String, Object>> list = jdbcTemplate.queryForList(sql);
    for (Map<String, Object> row : list) {
        countType = (String)row.get("status");
        count = (long)row.get("count");
        switch (countType) {
          case "NEW":
            incidentByStatus.setNewStatus(count);
            break;
          case "IN_PROGRESS":
            incidentByStatus.setInProgress(count);
            break;
          case "DISMISSED":
            incidentByStatus.setDismissed(count);
            break;
          case "RESOLVED":
            incidentByStatus.setResolved(count);
            break;
        }
    }
    resp.setOperationStatus(ResponseStatusEnum.SUCCESS);
    resp.setOperationMessage("Incident by status");
    resp.setContent(incidentByStatus);
    return resp;
  }

  @ApiOperation(value = "Incident by severity and status", response = IncidentBySeverityStatusResponse.class)
  @RequestMapping(value = "/incidents-by-severity-and-status", method = RequestMethod.GET)
  public IncidentBySeverityStatusResponse getIncidentsBySeverityAndStatus() {
    String sql = "select count(*) as count, concat(severity,'-',status) as sevirity_status from incident_detail group by severity, status order by severity";
    String countType = new String();
    long count;
    IncidentBySeverityStatusResponse resp = new IncidentBySeverityStatusResponse();
    IncidentBySeverityStatusModel severityStatus = new IncidentBySeverityStatusModel();
    IncidentByStatusModel alert    = new IncidentByStatusModel();
    IncidentByStatusModel info     = new IncidentByStatusModel();
    IncidentByStatusModel warning  = new IncidentByStatusModel();
    IncidentByStatusModel critical = new IncidentByStatusModel();

    List<Map<String, Object>> list = jdbcTemplate.queryForList(sql);
    for (Map<String, Object> row : list) {
        countType = (String)row.get("sevirity_status");
        count = (long)row.get("count");
        switch (countType) {
          case "ALERT-NEW":           alert.setNewStatus(count) ; break;
          case "ALERT-IN_PROGRESS":   alert.setInProgress(count); break;
          case "ALERT-DISMISSED":     alert.setDismissed(count) ; break;
          case "ALERT-RESOLVED":      alert.setResolved(count)  ; break;

          case "INFO-NEW":            info.setNewStatus(count) ; break;
          case "INFO-IN_PROGRESS":    info.setInProgress(count); break;
          case "INFO-DISMISSED":      info.setDismissed(count) ; break;
          case "INFO-RESOLVED":       info.setResolved(count)  ; break;

          case "WARNING-NEW":         warning.setNewStatus(count) ; break;
          case "WARNING-IN_PROGRESS": warning.setInProgress(count); break;
          case "WARNING-DISMISSED":   warning.setDismissed(count) ; break;
          case "WARNING-RESOLVED":    warning.setResolved(count)  ; break;

          case "CRITICAL-NEW":        critical.setNewStatus(count) ; break;
          case "CRITICAL-IN_PROGRESS":critical.setInProgress(count); break;
          case "CRITICAL-DISMISSED":  critical.setDismissed(count) ; break;
          case "CRITICAL-RESOLVED":   critical.setResolved(count)  ; break;

        }
    }
    severityStatus.setAlert(alert);
    severityStatus.setInfo(info);
    severityStatus.setWarning(warning);
    severityStatus.setCritical(critical);

    resp.setOperationStatus(ResponseStatusEnum.SUCCESS);
    resp.setOperationMessage("Incident by Severity and status");
    resp.setContent(severityStatus);
    return resp;
  }

}
