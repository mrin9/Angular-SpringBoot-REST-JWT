import { Injectable, Inject } from '@angular/core';
import { AppConfig } from '../../app-config';

@Injectable()
export class TranslateService {
    constructor(private appConfig:AppConfig) {
        // Code to get Locale Info from Session Storage
    }

    getDateString(datenum:number):string{
        return new Date(datenum).toLocaleDateString(this.appConfig.locale, this.appConfig.dateFormat);
    }

    getCurrencyString(number:number):string {
        return number.toLocaleString(this.appConfig.locale, this.appConfig.currencyFormat);
    }


}
