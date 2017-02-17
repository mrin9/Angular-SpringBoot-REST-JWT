import { Injectable, Inject } from '@angular/core';
import { Http, Headers, Response, Request, RequestOptions, URLSearchParams, RequestMethod } from '@angular/http';
import { Observable, ReplaySubject, Subject } from 'rxjs';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class TranslateService {
    public token: string;

    constructor() { }

    getDateString(datenum:number, locale="en-US"):string{
      let dateFormat = {year: 'numeric', month: 'short', day: 'numeric' ,hour:"2-digit",minute:"numeric"};
      return new Date(datenum).toLocaleDateString(locale,dateFormat);
    }

    getIncidentStatus(status:string):string{
      switch (status) {
        case "IN_PROGRESS": return "Progress";
        case "NEW"        : return "New";
        case "DISMISSED"  : return "Dismissed";
        case "RESOLVED"   : return "Resolved";
      }
    }

    getPolicyState(status:string):string{
      return status==="ACTIVE"?"Active":"Inactive";
    }
    getSeverity(severity:string):string{
      switch (severity) {
        case "CRITICAL": return "Critical";
        case "ALERT"   : return "Alert";
        case "WARNING" : return "Warning";
        case "INFO"    : return "Info";
      }
    }

}
