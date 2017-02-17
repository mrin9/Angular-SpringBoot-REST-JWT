import { Injectable, Inject } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LoginService {
    public token: string;
    public objUser:any;

    constructor(private http: Http,  @Inject('api') private api) {  //refer fo api value in app.module.ts
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser!== undefined && currentUser!== null && currentUser.token !== "INVALID"){
          this.token = currentUser.token;
          this.objUser = currentUser;
        }
    }

    login(username, password): Observable<Response> {

      /*
      let headers = new Headers({
        'Content-Type': 'application/json'
      });
      */

      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      let options = new RequestOptions({ headers: headers }); // Create a request option
      return this.http.post(this.api + 'session', JSON.stringify({ username: username, password: password }), options)
        .map((res:Response) => {
          let respUserObj = res.json();
          if (respUserObj !== undefined && respUserObj !== null && respUserObj.token !== "INVALID"){
            this.token   = respUserObj.token;
            this.objUser = respUserObj;
            // store username and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(respUserObj));
            return res;
          }
          else{
            return false;
          }
        })
        .catch((err:Response) => {
            console.log("Error === >" + err.status  );
            return Observable.throw(err) ;
        });
    }
    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    }

}
