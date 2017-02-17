import { Component, OnInit, Input } from '@angular/core';
@Component({
	selector: 's-badge',
  template: `<span class="s-badge {{badgeCls}}">{{text}}</span>`
})

export class BadgeComponent implements OnInit {
    @Input() public text:string;
    @Input() public badgeCls:string;

	constructor() { }

	ngOnInit() {

	}
}
