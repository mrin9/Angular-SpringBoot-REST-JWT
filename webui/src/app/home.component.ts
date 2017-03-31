import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import { Router,ActivatedRoute, NavigationEnd } from '@angular/router';

import { LogoComponent  }   from './components/logo/logo.component';


@Component({
  selector   : 'home-comp',
  templateUrl: './home.component.html',
  styleUrls  : ['./home.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent   {

    public showAppAlert:boolean = false;
    public appHeaderItems=[
        {
            label   : 'Dashboard',
            href    : '/home/dashboard',
            subNav  : [
                { label:"Order Stats"  , href:"/home/dashboard/order"  },
                { label:"Product Stats", href:"/home/dashboard/product"}
            ]
        },
        { label: 'Orders'   , href: '/home/orders'    },
        { label: 'Products' , href: '/home/products'  },
        { label: 'Customers', href: '/home/customers' },
        { label: 'Employees', href: '/home/employees' }
    ];

    public selectedHeaderItemIndex:number=0;
    public selectedSubNavItemIndex:number=1;


    public userName: string="";

  constructor(private router:Router, private activeRoute:ActivatedRoute) {
    // This block is to retrieve the data from the routes
    router.events
      .filter(event => event instanceof NavigationEnd)
      .map( _ => this.router.routerState.root)
      .map(route => {
        while (route.firstChild) route = route.firstChild;;
        return route;
      })
      .flatMap(route => route.data)
      .subscribe(data => {
        console.log("Route data: ",data[0]);
        this.selectedHeaderItemIndex = data[0].selectedHeaderItemIndex;
        this.selectedSubNavItemIndex = data[0].selectedSubNavItemIndex;
      });

    // This is to put the current user name
    let objUser:any =  JSON.parse(localStorage.getItem('currentUser'));
    if (objUser !== undefined && objUser.firstName && objUser.lastName){
        this.userName = objUser.firstName + " " + objUser.lastName;
    }
  }

  navbarSelectionChange(val){
     // console.log(val);
  }

  closeAppAlert(){
      this.showAppAlert=false;
  }

}
