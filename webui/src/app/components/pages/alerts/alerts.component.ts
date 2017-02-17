import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 's-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: [ './alerts.scss'],
})
export class AlertsComponent implements OnInit {
  @Input() width: number=300;
  @Input() showHeader: boolean=true;
  @Input() showFooter: boolean=false;
  @Input() headerText: string ="Alerts";
  @Input() footerText: string="";

@Input() headerLeftIconWidth : number=0;
@Input() headerRightIconWidth: number=25;
@Input() footerLeftIconWidth : number=0;
@Input() footerRightIconWidth: number=0;
@Input() page1Left:string = "0";

page2Left:string  = (this.width * -1) + "px";
page2Width:string = this.width + "px";

  constructor() { }

  ngOnInit() {
  }

  leftIconClick(){
    this.headerText= "Alerts";
    this.headerLeftIconWidth=0;
    this.headerRightIconWidth=25;
    this.page2Left = (this.width)  + "px";
  }

  rightIconClick(){
    this.headerLeftIconWidth=25;
    this.headerRightIconWidth=0;
    this.page2Left="0";
    this.headerText= "Notification Preferences";
  }

}
