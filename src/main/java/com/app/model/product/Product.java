package com.app.model.product;

import lombok.*;
import java.util.*;
import javax.persistence.*;
import io.swagger.annotations.ApiModelProperty;

@Data
@Entity
@Table(name = "products")
public class Product  {
    //@GeneratedValue(strategy = GenerationType.AUTO)
    @Id
    private Integer id;
    private String  productCode;
    private String  productName;
    private String  description;
    private Long    standardCost;
    private Long    listPrice;
    private Integer targetLevel;
    private Integer reorderLevel;
    private Integer minimumReorderQuantity;
    private String  quantityPerUnit;
    private Integer discontinued;
    @ApiModelProperty(allowableValues = "Camera, Laptop, Tablet, Phone") private String category;
    public Product(){}
}
