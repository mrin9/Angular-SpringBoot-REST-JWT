import { Component, OnInit,TemplateRef, ViewChild } from '@angular/core';
import { ProductService } from '../../services/api/product.service';
import { Router } from '@angular/router';

@Component({
	selector: 's-products-pg',
	templateUrl: './products.component.html',
    styleUrls: [ './products.scss'],
})

export class ProductsComponent implements OnInit {

    @ViewChild('productDiscontinuedTpl') productDiscontinuedTpl: TemplateRef<any>;

    //ngx-Datatable Variables
    columns:any[];
    rows:any[];


    constructor( private router: Router, private productService: ProductService) {}
    ngOnInit() {
        var me = this;
        me.getPolicyData();
        this.columns=[
            {prop:"productCode"  , name: "Code"         , width:60  },
            {prop:"productName"  , name: "Name"         , width:200 },
            {prop:"standardCost" , name: "Standard Cost", width:100 },
            {prop:"listPrice"    , name: "List Price"   , width:100 },
            {prop:"category"     , name: "Category"     , width:100 },
            {prop:"targetLevel"  , name: "Target Level" , width:100 },
            {prop:"reorderLevel" , name: "Reorder Level", width:100 },
            {prop:"minimumReorderQuantity", name: "Min Order", width:100 },
            {prop:"discontinued" , name: "Discontinued" , width:90, cellTemplate: this.productDiscontinuedTpl}
        ];

    }

    getPolicyData() {
        this.productService.getProducts().subscribe( (policyData) => {
            this.rows = policyData;
        });
    }


}
