import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/api/product.service';
import { Router } from '@angular/router';
import { NgxChartsModule} from '@swimlane/ngx-charts';
import 'rxjs/add/operator/mergeMap';

@Component({
	selector: 's-product_stats-pg',
	templateUrl: './product_stats.component.html',
    styleUrls: [ './product_stats.scss'],
})

export class ProductStatsComponent {


    public productByQuantityData=[];
    public barColorScheme = {domain: ['#007cbb']}

    constructor(private router: Router, private productService: ProductService ) { }
    ngOnInit() {
        var me = this;
        this.getPageData()
    }

    getPageData() {
        var me = this;
        me.productService.getProductStatsByQuantityOrdered()
        .subscribe(function(countryData){
            me.productByQuantityData = countryData.items;
            console.log("Received Orders By Country");
        });
    }

}
