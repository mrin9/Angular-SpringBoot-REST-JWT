import { Component, Input } from '@angular/core';
@Component({
	selector: 's-logo',
	templateUrl: './logo.component.html'
})

export class LogoComponent{
  @Input() fontColor = "#63666A";
  @Input() public iconColor: string = "#E3642B";
}
