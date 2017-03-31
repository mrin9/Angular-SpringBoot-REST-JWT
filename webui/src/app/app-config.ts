import { Injectable } from '@angular/core';

/**
 * This is a singleton class
 */
@Injectable()
export class AppConfig {
    //Provide all the Application Configs here

    public version:string = "1.0.0";
    public locale:string  = "en-US";
    public currencyFormat = { style:"currency", currency: "USD" };
    public dateFormat     = { year:'numeric', month: 'short', day: 'numeric'};

    // API Related configs
    public apiPort:string = "9119";
    public apiProtocol:string;
    public apiHostName:string;
    public baseApiPath:string;

    constructor(){
        if (this.apiProtocol===undefined){
            this.apiProtocol = window.location.protocol;
        }
        if (this.apiHostName===undefined){
            this.apiHostName = window.location.hostname;
        }
        if (this.apiPort===undefined){
            this.apiPort = window.location.port;
        }
        this.baseApiPath = this.apiProtocol + "//" + this.apiHostName + ":" + this.apiPort +"/";

        if (this.locale===undefined){
            this.locale = navigator.language;
        }

        console.log("basepath: " + this.baseApiPath);

    }
}
