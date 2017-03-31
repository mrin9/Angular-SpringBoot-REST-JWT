package com.app.model.order;

import lombok.*;
import java.io.Serializable;
import java.util.*;
import java.math.*;
import javax.persistence.*;
import io.swagger.annotations.ApiModelProperty;

@Data
@Entity
@Table(name = "order_items")
public class OrderItem  {

    @EmbeddedId
    @AttributeOverrides({
        @AttributeOverride(name = "orderId"  , column = @Column(name = "order_id")),
        @AttributeOverride(name = "productId", column = @Column(name = "product_id"))
    })
    CompositeOrderProductKey   orderItemKey;
    private BigDecimal   quantity;
    private BigDecimal   unitPrice;
    private BigDecimal   discount;

    @ApiModelProperty(allowableValues = "On Order, Allocated, No Stock")
    private String orderItemStatus;
    private Date   dateAllocated;

    public OrderItem(){}

    //To Create orderitem by passing product_id and order_id as seperate variables
    public OrderItem(int orderId, int productId, BigDecimal quantity, BigDecimal unitPrice, BigDecimal discount, String orderItemStatus, Date dateAllocated){
        this(new CompositeOrderProductKey(orderId, productId), quantity, unitPrice, discount, orderItemStatus, dateAllocated);
    }

    //TO Create orderitem by passing Composite Key
    public OrderItem(CompositeOrderProductKey orderItemKey, BigDecimal quantity, BigDecimal unitPrice, BigDecimal discount, String orderItemStatus, Date dateAllocated){
        this.orderItemKey = orderItemKey;
        this.quantity     = quantity;
        this.unitPrice    = unitPrice;
        this.discount     = discount;
        this.dateAllocated=dateAllocated;
        this.orderItemStatus =orderItemStatus;
    }



}
