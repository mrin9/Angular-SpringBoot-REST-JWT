import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import { Router,ActivatedRoute, NavigationEnd } from '@angular/router';

import { LogoComponent  } from './components/logo/logo.component';
import { LoginService   } from './services/api/login.service';
import { UserInfoService} from './services/user-info.service';

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

    constructor(
        private router:Router,
        private activeRoute:ActivatedRoute,
        private loginService:LoginService,
        private userInfoService:UserInfoService
    ) {
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
        this.userName = this.userInfoService.getUserName();

    }

    navbarSelectionChange(val){
        // console.log(val);
    }

    closeAppAlert(){
        this.showAppAlert=false;
    }

}
