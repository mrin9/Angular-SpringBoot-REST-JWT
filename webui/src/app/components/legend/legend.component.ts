import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector : 's-legend',
    styleUrls: [ './legend.scss'],
	template : `
    <div class="s-legend-wrap">
        <div *ngFor=" let l of legend " class="s-legend-item">
        <div  [ngStyle]="{'background-color':l.color}" class="s-legend-color"></div>
        <div class="s-legend-value-wrap">
            <div class="s-legend-value">{{l.value}}</div>
            <div class="s-legend-label">{{l.name}}</div>
        </div>
        </div>
    </div>
    `
})

export class LegendComponent{
  @Input() legend:any[];
}
