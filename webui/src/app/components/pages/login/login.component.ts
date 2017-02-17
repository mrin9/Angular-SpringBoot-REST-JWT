import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../../api/login.service';

@Component({
    selector   : 's-login-pg',
    templateUrl: './login.component.html',
    styleUrls  : [ './login.scss'],
})

export class LoginComponent implements OnInit {
    model: any = {};
    errMsg:string = '';

    constructor(
        private router: Router,
        private loginService: LoginService) { }

    ngOnInit() {
        // reset login status
        this.loginService.logout();
    }

    login() {
        this.loginService.login(this.model.username, this.model.password)
            .subscribe(
                resp => {
                    console.log(resp);
                    this.router.navigate(['/']);
                },
                errResponse => {
                  switch(errResponse.status){
                    case 401:
                      this.errMsg = 'Username or password is incorrect';
                      break;
                    case 404:
                      this.errMsg = 'Service not found';
                    case 408:
                      this.errMsg = 'Request Timedout';
                    default:
                      this.errMsg = 'Server Error';
                  }
                }
            );
    }

    onSignUp(){
      this.router.navigate(['signup']);
    }


}
