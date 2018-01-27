import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { Observable,Subject,BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { UserInfoService, LoginInfoInStorage} from '../user-info.service';
import { ApiRequestService } from './api-request.service';

export interface LoginRequestParam{
    username:string;
    password:string;
}

@Injectable()
export class LoginService {

    public landingPage:string = "/home/dashboard/order";
    constructor(
        private router:Router,
        private userInfoService: UserInfoService,
        private apiRequest: ApiRequestService
    ) {}


    getToken(username:string, password:string): Observable<any> {
        let me = this;

        let bodyData:LoginRequestParam = {
            "username": username,
            "password": password,
        }
        /*
            Using BehaviorSubject instead of Subject
            In Angular services are initialized before the components, if any component is
            subscribing, it will only receive events which are executed after subscription.
            therefore if you put a syncronize next() in the service, the component wont get it.

            A BehaviourSubject will always provide the values wheather the subscription happened after or before event

        */

        let loginDataSubject:BehaviorSubject<any> = new BehaviorSubject<any>([]); // Will use this BehaviorSubject to emit data that we want after ajax login attempt
        let loginInfoReturn:LoginInfoInStorage; // Object that we want to send back to Login Page

        this.apiRequest.post('session', bodyData)
            .subscribe(jsonResp => {
                if (jsonResp !== undefined && jsonResp !== null && jsonResp.operationStatus === "SUCCESS"){
                    //Create a success object that we want to send back to login page
                    loginInfoReturn = {
                        "success"    : true,
                        "message"    : jsonResp.operationMessage,
                        "landingPage": this.landingPage,
                        "user"       : {
                            "userId"     : jsonResp.item.userId,
                            "email"      : jsonResp.item.emailAddress,
                            "displayName": jsonResp.item.firstName + " " + jsonResp.item.lastName,
                            "token"      : jsonResp.item.token,
                        }
                    };

                    // store username and jwt token in session storage to keep user logged in between page refreshes
                    this.userInfoService.storeUserInfo(JSON.stringify(loginInfoReturn.user));
                }
                else {
                    //Create a faliure object that we want to send back to login page
                    loginInfoReturn = {
                        "success":false,
                        "message":jsonResp.msgDesc,
                        "landingPage":"/login"
                    };
                }
                loginDataSubject.next(loginInfoReturn);
            },
            err => {
              loginInfoReturn = {
                "success": false,
                "message": err.url + " >>> " + err.statusText +  "[" + err.status +"]",
                "landingPage": "/login"
              };
            });

            return loginDataSubject;
    }

    logout(navigatetoLogout=true): void {
        // clear token remove user from local storage to log user out
        this.userInfoService.removeUserInfo();
        if(navigatetoLogout){
            this.router.navigate(["logout"]);
        }
    }
}
