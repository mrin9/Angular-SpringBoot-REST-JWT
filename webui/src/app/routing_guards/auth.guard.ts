import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate() {
        if (localStorage.getItem('currentUser')) {
            // Login token present (but try to validate the token with the server )
            return true;
        }

        // not logged in so redirect to login page
        this.router.navigate(['login']);
        return false;
    }
}
