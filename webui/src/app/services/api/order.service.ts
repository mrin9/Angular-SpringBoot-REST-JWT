import { Injectable, Inject } from '@angular/core';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { ApiRequestService } from './api-request.service';
import { TranslateService } from './translate.service';
import { HttpParams} from "@angular/common/http";

@Injectable()
export class OrderService {

    constructor(
        private apiRequest: ApiRequestService,
        private translate:TranslateService
    ) {}

    /**
     * Gets List of orders
     */
    getOrderInfo(page?:number, size?:number): Observable<any> {
        //Create Request URL params
        let me = this;
        let params: HttpParams = new HttpParams();
        params = params.append('page', typeof page === "number"? page.toString():"0");
        params = params.append('size', typeof page === "number"? size.toString():"1000");
        let orderListSubject = new Subject<any>(); // Will use this subject to emit data that we want
        this.apiRequest.get('api/orders',params)
            .subscribe(jsonResp => {
                let returnObj = jsonResp.items.map(function(v, i, a){
                    let newRow = Object.assign({}, v, {
                        orderDate  : me.translate.getDateString(v.orderDate),
                        paidDate   : me.translate.getDateString(v.paidDate),
                        shippedDate: me.translate.getDateString(v.shippedDate)
                    });
                    return newRow;
                });
                orderListSubject.next(returnObj); // incidentList is a Subject and emits an event thats being listened to by the components
            });
        return orderListSubject;
    }

    /**
     * Gets Orders and Order Lines (Products in each order)
     */
    getOrderDetails(orderId:number): Observable<any> {
        //Create Request URL params
        let me = this;
        let params: HttpParams = new HttpParams();
        if (orderId){
            params = params.append('orderid', orderId.toString());
        }
        let orderDetailSubject = new Subject<any>(); // Will use this subject to emit data that we want
        this.apiRequest.get('api/order-details',params)
            .subscribe(jsonResp => {
                let returnObj = jsonResp.items.map(function(v, i, a){
                    let newRow = Object.assign({}, v, {
                        orderDate  : me.translate.getDateString(v.orderDate),
                        paidDate   : me.translate.getDateString(v.paidDate),
                        shippedDate: me.translate.getDateString(v.shippedDate)
                    });
                    return newRow;
                });
                orderDetailSubject.next(returnObj); // incidentList is a Subject and emits an event thats being listened to by the components
            });

        return orderDetailSubject;
    }

    getOrderStats(field:string): Observable<any> {
        return this.apiRequest.get('api/order-stats/' + field );
    }


}
