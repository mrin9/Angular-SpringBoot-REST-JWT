package com.app.api.customer;

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
import com.app.model.customer.*;
import com.app.repo.*;
import com.app.model.response.*;
import static com.app.model.response.OperationResponse.*;

@RestController
@Transactional
@RequestMapping(value = "/api", produces = MediaType.APPLICATION_JSON_VALUE)
@Api(tags = {"Customers"})
public class CustomerController {

  @Autowired private JdbcTemplate jdbcTemplate;
  @Autowired private CustomerRepo customerRepo;

  @ApiOperation(value = "List of customers", response = CustomerResponse.class)
  @RequestMapping(value = "/customers", method = RequestMethod.GET)
  public CustomerResponse getCustomersByPage(
    @ApiParam(value = ""    )               @RequestParam(value = "page"  ,  defaultValue="1"   ,  required = false) Integer page,
    @ApiParam(value = "between 1 to 1000" ) @RequestParam(value = "size"  ,  defaultValue="20"  ,  required = false) Integer size,
    @RequestParam(value = "customerid"  , required = false) Integer customerId,
    @RequestParam(value = "company"  , required = false) String company,
    @RequestParam(value = "country"  , required = false) String country,
    Pageable pageable
  ) {
      CustomerResponse resp = new CustomerResponse();
      Customer qry = new Customer();
      if (customerId != null) { qry.setId(customerId); }
      if (company != null)    { qry.setCompany(company); }
      if (country != null)    { qry.setCountry(country); }

      Page<Customer> pg = customerRepo.findAll(org.springframework.data.domain.Example.of(qry), pageable);
      resp.setPageStats(pg, true);
      resp.setItems(pg.getContent());
      return resp;
  }

    @ApiOperation(value = "Add new customer", response = OperationResponse.class)
    @RequestMapping(value = "/customers", method = RequestMethod.POST, produces = {"application/json"})
    public OperationResponse addNewCustomer(@RequestBody Customer customer, HttpServletRequest req) {
        OperationResponse resp = new OperationResponse();
        if (this.customerRepo.exists(customer.getId()) ){
            resp.setOperationStatus(ResponseStatusEnum.ERROR);
            resp.setOperationMessage("Unable to add Customer - Customer allready exist ");
        }
        else{
            Customer addedCustomer = this.customerRepo.save(customer);
            resp.setOperationStatus(ResponseStatusEnum.SUCCESS);
            resp.setOperationMessage("Customer Added");
        }
        return resp;
    }


    @ApiOperation(value = "Delete a customer", response = OperationResponse.class)
    @RequestMapping(value = "/customers/{customerId}", method = RequestMethod.DELETE, produces = {"application/json"})
    public OperationResponse deleteCustomer(@PathVariable("customerId") Integer customerId, HttpServletRequest req) {
        OperationResponse resp = new OperationResponse();
        try {
            if (this.customerRepo.exists(customerId) ){
                this.customerRepo.delete(customerId);
                resp.setOperationStatus(ResponseStatusEnum.SUCCESS);
                resp.setOperationMessage("Customer Deleted");
            }
            else{
                resp.setOperationStatus(ResponseStatusEnum.ERROR);
                resp.setOperationMessage("No Customer Exist");
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
