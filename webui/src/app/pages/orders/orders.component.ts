import { Component, OnInit,TemplateRef, ViewChild } from '@angular/core';
import { OrderService } from '../../services/api/order.service';
import { Router } from '@angular/router';
import 'rxjs/add/operator/mergeMap';


@Component({
	selector: 's-orders-pg',
	templateUrl: './orders.component.html',
    styleUrls: [ './orders.scss'],
})

export class OrdersComponent implements OnInit {
    @ViewChild('orderStatusCellTpl') statusCellTpl: TemplateRef<any>;
    @ViewChild('orderIdTpl') orderIdTpl: TemplateRef<any>;
    columns:any[];
    rows:any[];
    orderByStatusData: any[] = [];
    isLoading:boolean=false;
    constructor(private router: Router, private orderService: OrderService) { }

    ngOnInit() {
        var me = this;
        me.getPageData();
        this.columns=[
            {prop:"orderId"         , name: "ID"           , width:65, cellTemplate: this.orderIdTpl   },
            {prop:"orderDate"       , name: "Order Date"   , width:105 },
            {prop:"orderStatus"     , name: "Status"       , width:85, cellTemplate: this.statusCellTpl },
            {prop:"customerName"    , name: "Name"         , width:150 },
            {prop:"customerEmail"   , name: "Email"        , width:200 },
            {prop:"customerCompany" , name: "Company"      , width:110 },
            {prop:"paymentType"     , name: "Pay Type"     , width:80  },
            {prop:"paidDate"        , name: "Pay Date"     , width:105 },
            {prop:"shippedDate"     , name: "Ship Date"    , width:105 },
            {prop:"shipCountry"     , name: "Ship Country" , width:110 }
        ];
    }

    getPageData() {
        var me = this;
        let legendColors = {"On Hold":'#ef2e2e', "Shipped":'#ff8e28', "Complete":'#61c673', "New":'#007cbb'};
        me.isLoading=true;
        me.orderService.getOrderStats("status")
        .mergeMap(function(statusData){
            me.orderByStatusData = statusData.items.map(function(v,i,a){
                return {name:v.name, value:v.value, color:legendColors[v.name]}
            });
            console.log("Got Order Stats");
            return me.orderService.getOrderInfo();
        })
        .subscribe(function(orderData){
            me.rows = orderData;
            me.isLoading=false;
            console.log("Got Order Data");
        })
    }



}
