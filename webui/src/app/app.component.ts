import { Component } from '@angular/core';
import { LoginComponent } from './components/pages/login/login.component';
@Component({
  selector: 'app-root',
  styleUrls: ['../assets/scss/index.scss'],
  template: `
   <router-outlet></router-outlet>
  `
})

export class AppComponent {
  private isLoggedOut:boolean = true;
  ngOnInit() {
       if (localStorage.getItem('currentUser')) {
            // This indicates the username and token exist in the local
            // try to validate a token to ensure it is not expired on the server
            this.isLoggedOut = false;
            return true;
        }
        else{
          this.isLoggedOut = true;
        }
  }

}
