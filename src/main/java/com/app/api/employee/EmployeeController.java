package com.app.api.employee;

import io.swagger.annotations.*;
//import springfox.documentation.annotations.*;
import javax.servlet.http.*;
import org.springframework.http.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.data.domain.*;
import org.springframework.transaction.annotation.Transactional;
//import static org.springframework.http.MediaType.*;

import java.util.*;
import com.app.api.*;
import com.app.model.employee.*;
import com.app.repo.*;
import com.app.model.response.*;
import static com.app.model.response.OperationResponse.*;

@RestController
@Transactional
@RequestMapping(value = "/api", produces = MediaType.APPLICATION_JSON_VALUE)
@Api(tags = {"Employee"})
public class EmployeeController {

  @Autowired private JdbcTemplate jdbcTemplate;
  @Autowired private EmployeeRepo employeeRepo;

  @ApiOperation(value = "List of employees", response = EmployeeResponse.class)
  @RequestMapping(value = "/employees", method = RequestMethod.GET)
  public EmployeeResponse getEmployeesByPage(
    @ApiParam(value = ""    )               @RequestParam(value = "page"  ,  defaultValue="0"   ,  required = false) Integer page,
    @ApiParam(value = "between 1 to 1000" ) @RequestParam(value = "size"  ,  defaultValue="20"  ,  required = false) Integer size,
    @RequestParam(value = "employeeid"  , required = false) Integer employeeId,
    Pageable pageable
  ) {
      EmployeeResponse resp = new EmployeeResponse();
      Employee qry = new Employee();
      if (employeeId != null)  { qry.setId(employeeId); }

      Page<Employee> pg = employeeRepo.findAll(org.springframework.data.domain.Example.of(qry), pageable);
      resp.setPageStats(pg, true);
      resp.setItems(pg.getContent());
      return resp;
  }

    @ApiOperation(value = "Add new employee", response = OperationResponse.class)
    @RequestMapping(value = "/employees", method = RequestMethod.POST, produces = {"application/json"})
    public OperationResponse addNewEmployee(@RequestBody Employee employee, HttpServletRequest req) {
        OperationResponse resp = new OperationResponse();
        if (this.employeeRepo.exists(employee.getId()) ){
            resp.setOperationStatus(ResponseStatusEnum.ERROR);
            resp.setOperationMessage("Unable to add Employee - Employee allready exist ");
        }
        else{
            Employee addedEmployee = this.employeeRepo.save(employee);
            resp.setOperationStatus(ResponseStatusEnum.SUCCESS);
            resp.setOperationMessage("Employee Added");
        }
        return resp;
    }


    @ApiOperation(value = "Delete a Employee", response = OperationResponse.class)
    @RequestMapping(value = "/Employees/{employeeId}", method = RequestMethod.DELETE, produces = {"application/json"})
    public OperationResponse deleteEmployee(@PathVariable("employeeId") Integer employeeId, HttpServletRequest req) {
        OperationResponse resp = new OperationResponse();
        try {
            if (this.employeeRepo.exists(employeeId) ){
                this.employeeRepo.delete(employeeId);
                resp.setOperationStatus(ResponseStatusEnum.SUCCESS);
                resp.setOperationMessage("Employee Deleted");
            }
            else{
                resp.setOperationStatus(ResponseStatusEnum.ERROR);
                resp.setOperationMessage("No Employee Exist");
            }
        }
        catch ( Exception ge ){
            System.out.println("========= MRIN GENERIC EXCEPTION ============");
            resp.setOperationStatus(ResponseStatusEnum.ERROR);
            resp.setOperationMessage(ge.getMessage());
        }

        return resp;
    }


}
