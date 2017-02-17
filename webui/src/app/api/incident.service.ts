import { Injectable, Inject } from '@angular/core';
import { Http, Headers, Response, Request, RequestOptions, URLSearchParams,RequestMethod } from '@angular/http';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { TranslateService } from './translate.service';


@Injectable()
export class IncidentService {
    public token: string;

    constructor(private http: Http, @Inject('api') private api, private translate:TranslateService) {  //refer fo api value in app.module.ts
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    getIncidents(page:number, size:number): Observable<any> {
      //Create Request URL params
      let me = this;
      let params: URLSearchParams = new URLSearchParams();
      params.set('page', page.toString());
      params.set('size', size.toString());

      let options = new RequestOptions({
          method : RequestMethod.Get,
          url    : this.api + 'cas/incidents',
          search : params
      });
      let incidentList = new Subject<any>(); // Will use this subject to emit data that we want

      this.http.request(new Request(options))
        .map(resp => resp.json())
        .catch((err:Response) => {
            console.log("Error === >" + err.status  );
            return Observable.throw(err) ;
        })
        .subscribe(jsonResp => {
            let returnObj = jsonResp.items.map(function(v, i, a){
                let newRow = Object.assign({}, v, {
                  status    : me.translate.getIncidentStatus(v.status),
                  severity  : me.translate.getSeverity(v.severity),
                  detectedOn: me.translate.getDateString(v.detectedOn)
                });
                return newRow;
            });
            incidentList.next(returnObj); // incidentList is a Subject and emits an event thats being listened to by the components
        });
        return incidentList;
    }


    getIncidentsBySeverity(): Observable<any> {
      let incidentBySeverity = new Subject<any>(); // Will use this subject to emit data that we want
      let options = new RequestOptions({
          method : RequestMethod.Get,
          url    : this.api + 'cas/incidents-by-severity'
      });

      this.http.request(new Request(options))
        .map(res => res.json())
        .catch((err:Response) => {
            console.log("Error === >" + err.status  );
            return Observable.throw(err) ;
        })
        .subscribe(function(resp){
            let returnObj = [
              {"name":"Critical", "value":resp.content.critical},
              {"name":"Alert"   , "value":resp.content.alert   },
              {"name":"Warning" , "value":resp.content.warning },
              {"name":"Info"    , "value":resp.content.info    }
            ];
            incidentBySeverity.next(returnObj);
        });
        return incidentBySeverity;
    }

    getIncidentsByStatus(): Observable<any> {
      let incedentSubject = new Subject<any>(); // Will use this subject to emit data that we want
      let options = new RequestOptions({
          method : RequestMethod.Get,
          url    : this.api + 'cas/incidents-by-status'
      });

      this.http.request(new Request(options))
        .map(res => res.json())
        .catch((err:Response) => {
            console.log("Error === >" + err.status  );
            return Observable.throw(err) ;
        })
        .subscribe(function(resp){
            let returnObj = [
              {"name":"New"         , "value":resp.content.newStatus },
              {"name":"In Progress" , "value":resp.content.inProgress},
              {"name":"Resolved"    , "value":resp.content.resolved  },
              {"name":"Dismissed"   , "value":resp.content.dismissed }
            ];
            incedentSubject.next(returnObj);
        });
        return incedentSubject;
    }

    getIncidentsBySeverityAndStatus(): Observable<any> {
      let incedentSubject = new Subject<any>(); // Will use this subject to emit data that we want
      let options = new RequestOptions({
          method : RequestMethod.Get,
          url    : this.api + 'cas/incidents-by-severity-and-status'
      });

      this.http.request(new Request(options))
        .map(res => res.json())
        .catch((err:Response) => {
            console.log("Error === >" + err.status  );
            return Observable.throw(err) ;
        })
        .subscribe(function(resp:any){
          let severityLable:string[][] = [
              ["critical", "Critical"],
              ["alert"   , "Alert"],
              ["warning" , "Warning"],
              ["info"    , "Info" ]
          ];
          let returnObj = [];
          for (let i =0; i<severityLable.length; i++){
              let key:string = severityLable[i][0];
              returnObj.push(
                  {
                    "name":severityLable[i][1],
                    "series": [
                      { name:"New"        , value:resp.content[key].newStatus },
                      { name:"In Progress", value:resp.content[key].inProgress},
                      { name:"Resolved"   , value:resp.content[key].resolved  },
                      { name:"Dismissed"  , value:resp.content[key].dismissed }
                    ]
                  }
                );
            }
            incedentSubject.next(returnObj);
        });
        return incedentSubject;
    }

}
