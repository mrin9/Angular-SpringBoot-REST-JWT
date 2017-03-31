import { Component } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
	selector   : 's-logout-pg',
	templateUrl: './logout.component.html',
    styleUrls  : [ './logout.scss'],
})

export class LogoutComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute){
    localStorage.clear();
  }
}
