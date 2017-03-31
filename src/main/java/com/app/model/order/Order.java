package com.app.model.order;

import lombok.*;
import java.util.*;
import java.math.*;
import javax.persistence.*;
import io.swagger.annotations.ApiModelProperty;

@Data
@Entity
@Table(name = "orders")
public class Order  {
    //@GeneratedValue(strategy = GenerationType.AUTO)
    @Id
    private Integer id;
    private Integer employeeId;
    private Integer customerId;
    private Date    orderDate;
    private Date    shippedDate;
    private Date    paidDate;
    private String  shipName;
    private String  shipAddress1;
    private String  shipAddress2;
    private String  shipCity;
    private String  shipState;
    private String  shipPostalCode;
    private String  shipCountry;
    private BigDecimal shippingFee;
    @ApiModelProperty(allowableValues = "Check, Cash, Card") private String paymentType;
    @ApiModelProperty(allowableValues = "On Hold, Shipped, Complete, New")private String orderStatus;

    //Constructors
    public Order(){}
    public Order(Integer  id   , Integer employeeId  , Integer customerId  , Date   orderDate   , String orderStatus,
        Date       shippedDate , String  shipName    , String  shipAddress1, String shipAddress2, String shipCity   , String shipState, String shipPostalCode, String shipCountry,
        BigDecimal shippingFee , String  paymentType , Date    paidDate
    ){
        this.id=id;
        this.employeeId  = employeeId ;
        this.customerId  = customerId ;
        this.orderDate   = orderDate;
        this.orderStatus = orderStatus;
        this.shippedDate = shippedDate;
        this.shipName    = shipName;
        this.shipAddress1= shipAddress1;
        this.shipAddress2= shipAddress2;
        this.shipCity    = shipCity;
        this.shipState   = shipState;
        this.shipPostalCode= shipPostalCode;
        this.shipCountry = shipCountry;
        this.shippingFee = shippingFee;
        this.paymentType = paymentType;
        this.paidDate    = paidDate;
    }

}
