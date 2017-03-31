package com.app.api.order;

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
import java.lang.*;
import java.math.BigDecimal;
import com.app.api.*;
import com.app.repo.*;
import com.app.model.order.*;
import com.app.model.response.*;
import com.app.model.data.*;
import static com.app.model.response.OperationResponse.*;

@RestController
@RequestMapping(value = "/api", produces = MediaType.APPLICATION_JSON_VALUE)
@Api(tags = {"Order"})
public class OrderStatsController {

    @Autowired private JdbcTemplate jdbcTemplate;

    @ApiOperation(value = "Order Stats", response = SingleDataSeriseResponse.class)
    @RequestMapping(value = "/order-stats/{type}", method = RequestMethod.GET)
    public SingleDataSeriseResponse getOrderStats(@PathVariable("type") String type ) {
        String fieldName = "";
        if (type.equalsIgnoreCase("status") || type.equalsIgnoreCase("order_status")){
            fieldName = " order_status ";
        }
        else if (type.equalsIgnoreCase("paytype") || type.equalsIgnoreCase("payment_type")){
            fieldName = " payment_type ";
        }
        else if (type.equalsIgnoreCase("country") || type.equalsIgnoreCase("ship_country")){
            fieldName = " ship_country ";
        }
        else{
            fieldName = " order_status ";
        }

        String sql = "select count(*) as value, " + fieldName + " as name from orders group by " + fieldName;
        String countType = new String();
        long count;
        SingleSerise singleSerise;
        SingleDataSeriseResponse resp = new SingleDataSeriseResponse();
        ArrayList<SingleSerise> dataItemList = new ArrayList<SingleSerise>();


        List<Map<String, Object>> list = jdbcTemplate.queryForList(sql);

        for (Map<String, Object> row : list) {
            singleSerise = new SingleSerise((String)row.get("name"), new BigDecimal((long)row.get("value")) );
            dataItemList.add(singleSerise);
        }
        resp.setItems(dataItemList);
        resp.setOperationStatus(ResponseStatusEnum.SUCCESS);
        resp.setOperationMessage("Orders by " + fieldName);
        //resp.setItems(singleSerise);
        return resp;
    }


}
