import { Component, Input, OnChanges, SimpleChange, OnInit } from '@angular/core';

@Component({
  selector: 's-pill',
  styleUrls: [ './pill.scss'],
  template: `
    <div class="s-pill-wrap"
        [ngStyle]="{
        'border-radius':borderRadius+'px',
        'padding': wrapPadding+'px',
        'box-shadow':(spread?'0px 0px 0px 6px rgba(0,0,0,0.1)':'none'),
        'font-size':fontSize,
        'flex-direction':(iconAlign=='right'?'row-reverse':'row'),
        'line-height':(pillInnerHeight-2)+'px'
    }">
        <div class="s-pill-icon {{iconCls}}"
            (click)="onPillClick($event)"
            style="background-size:contain; text-align:center; vertical-align:middle; "
            [ngStyle]="{
            'margin':iconMargin+'px',
            'width':pillInnerHeight  +'px',
            'height':pillInnerHeight +'px',
            'border-radius': iconRadius+'px',
            'line-height':pillInnerHeight+'px',
            'background-color':color
        }"></div>

        <div class="s-pill-text"
            style="padding:0 10px; text-align:center; vertical-align:middle; "
            [ngStyle]="{'color':color, 'display':hideText?'none':'inline-block', 'font-size':fontSize, 'line-height':pillSize+'px'}">
            {{text}}
        </div>
   </div>
   `
})
export class PillComponent implements  OnChanges {

    @Input() public size:any;
    @Input() public text:string;
    @Input() public iconCls:string;
    @Input() public iconAlign:string;
    @Input() public color: string;
    @Input() public hideIcon: boolean;
    @Input() public hideText: boolean;
    @Input() public spread: boolean;
    @Input() rounded:string;
    pillHeight:number;
    pillInnerHeight:number;
    iconMargin:number;
    fontSize:String;
    wrapPadding:number;
    borderRadius:number;
    iconRadius:number;
    changeLog:string[]=[];
    constructor() {}

    ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
        var me = this;
        for (let propName in changes) {
            let chng = changes[propName];
            let cur  = JSON.stringify(chng.currentValue);
            let prev = JSON.stringify(chng.previousValue);
            this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
        }
        if ( changes['size'].currentValue){
            me.setSize(changes['size'].currentValue.trim(), changes['rounded'].currentValue.trim());
        }
    }

    setSize(size:string, rounded:string):void{
        var me = this;
        //debugger;
        switch (size){
        case "small":
            me.pillHeight=18;
            me.wrapPadding=1;
            me.fontSize="10px";
            me.iconMargin=0;
            break;
        case "medium":
            me.pillHeight=28;
            me.wrapPadding=2;
            me.fontSize="12px";
            me.iconMargin=0;
            break;
        case "large":
            me.pillHeight=36;
            me.fontSize="24px";
            me.iconMargin=0;
            me.wrapPadding=2;
            break;
        default:
            me.pillHeight=24;
            me.fontSize="12px";
            me.iconMargin=0;
            me.wrapPadding=2;
        }
        me.pillInnerHeight=me.pillHeight-(me.wrapPadding*2);
        if (rounded === "true"){
            me.borderRadius = me.pillHeight/2 ;
            me.iconRadius = me.pillInnerHeight/2 ;
        }
        else if (typeof parseInt(rounded,10)==="number"){
            me.borderRadius = parseInt(rounded,10);
            me.iconRadius = parseInt(rounded,10);
        }
        else{
            me.borderRadius = 0;
            me.iconRadius = 0;
        }

    }

    onPillClick(event){

    }

}
