package com.app.api.product;

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
import java.math.BigDecimal;
import com.app.api.*;
import com.app.repo.*;
import com.app.model.order.*;
import com.app.model.response.*;
import com.app.model.data.*;
import static com.app.model.response.OperationResponse.*;

@RestController
@RequestMapping(value = "/api", produces = MediaType.APPLICATION_JSON_VALUE)
@Api(tags = {"Product"})
public class ProductStatsController {

    @Autowired private JdbcTemplate jdbcTemplate;

    @ApiOperation(value = "Product Stats", response = SingleDataSeriseResponse.class)
    @RequestMapping(value = "/product-stats-by-quantity", method = RequestMethod.GET)
    public SingleDataSeriseResponse getProductStatsByQuantity() {

        String sql = "select product_name as name, sum(quantity) as value from order_details group by product_name ";
        String countType = new String();
        long count;
        SingleSerise singleSerise;
        SingleDataSeriseResponse resp = new SingleDataSeriseResponse();
        ArrayList<SingleSerise> dataItemList = new ArrayList<SingleSerise>();


        List<Map<String, Object>> list = jdbcTemplate.queryForList(sql);

        for (Map<String, Object> row : list) {
            singleSerise = new SingleSerise((String)row.get("name"),(BigDecimal)row.get("value") );
            dataItemList.add(singleSerise);
        }
        resp.setItems(dataItemList);
        resp.setOperationStatus(ResponseStatusEnum.SUCCESS);
        resp.setOperationMessage("Orders by Quantity Ordered");
        //resp.setItems(singleSerise);
        return resp;
    }


}
