import { Injectable, Inject } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Observable,Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LoginService {
    public token:string;
    public objUser:any;
    public landingPage:string = "/home/dashboard/order";

    constructor(private http: Http,  @Inject('api') private api) {  //refer fo api value in app.module.ts
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser!== undefined && currentUser!== null && currentUser.token !== "INVALID"){
          this.token = currentUser.token;
          this.objUser = currentUser;
        }
    }

    login(username, password): Observable<any> {
        /*
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        */
        let loginDataSubject:Subject<any> = new Subject<any>(); // Will use this subject to emit data that we want after ajax login attempt
        let loginReturnData={} // Object that we want to send back to Login Page
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers }); // Create a request option

        this.http.post(this.api + 'session', JSON.stringify({ username: username, password: password }), options)
            .map(resp => resp.json())
            .catch((err:Response) => {
                console.log("Error === >" + err.status  );
                return Observable.throw(err) ;
            })
            .subscribe(jsonResp => {
                if (jsonResp !== undefined && jsonResp !== null && jsonResp.token !== "INVALID"){
                    this.token   = jsonResp.token;
                    this.objUser = jsonResp;
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(jsonResp));
                }

                //Create a object that we want to send back to login page
                loginReturnData = {
                    user : jsonResp,
                    landingPage:this.landingPage
                };
                loginDataSubject.next(loginReturnData);

            });
            return loginDataSubject;
        }



        logout(): void {
            // clear token remove user from local storage to log user out
            this.token = null;
            localStorage.removeItem('currentUser');
        }

        isLoggedIn():boolean{
            return localStorage.getItem('currentUser')?true:false;
        }

        getUserName():string{
            if (localStorage.getItem("currentUser")){
                let userObj = JSON.parse(localStorage.getItem("currentUser"))
                return userObj.firstName + " " + userObj.lastName;
            }
            return "no-user";
        }

        getStoredToken():string{
            return JSON.parse(localStorage.getItem("currentUser")).token
        }

        appendAuthHeader(headers:Headers){
            headers.append("Authorization", this.getStoredToken());
        }

}
