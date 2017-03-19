import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import { Router,ActivatedRoute, NavigationEnd } from '@angular/router';

import { LogoComponent  }   from './components/logo/logo.component';
import { ItemDescrModel }   from './models/item-descr.model';


@Component({
  selector : 'home-comp',
  templateUrl: './home.component.html',
  styleUrls: ['./home.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent   {
  @ViewChild('alertSideNav') alertSideNav;

  public selectedNavItem:string ="customers";
  public openRightDraw: boolean = false;
  public userName: string="";

  constructor(private router:Router, private activeRoute:ActivatedRoute) {
    // This block is to retrieve the data from the routes
    router.events
      .filter(event => event instanceof NavigationEnd)
      .map(_ => this.router.routerState.root)
      .map(route => {
        while (route.firstChild) route = route.firstChild;;
        return route;
      })
      .flatMap(route => route.data)
      .subscribe(data => {
        //console.log(data[0].comp);
        this.selectedNavItem = data[0].comp
      });

    // This is to put the current user name
    let objUser:any =  JSON.parse(localStorage.getItem('currentUser'));
    if (objUser !== undefined && objUser.firstName && objUser.lastName){
        this.userName = objUser.firstName + " " + objUser.lastName;
    }
  }

  toolbarNavItems:ItemDescrModel[] = [
    { itemId: 'dashboard' , itemDescr: 'Dashboard' },
    { itemId: 'policy'    , itemDescr: 'Policy'    },
    { itemId: 'incidents' , itemDescr: 'Incidents' },
    { itemId: 'settings'  , itemDescr: 'Settings'  }
  ];


  navbarSelectionChange(val){
     // console.log(val);
  }


  onAlertClick($event){
    this.alertSideNav.open();
    //this.openRightDraw = !this.openRightDraw;
  }

  onLogout(event){
    localStorage.clear();
    window.location.href = '/index.html';
  }
}
