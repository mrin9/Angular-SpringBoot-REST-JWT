import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent  }       from './home.component';

import { LoginComponent        }   from './pages/login/login.component';
import { LogoutComponent       }   from './pages/logout/logout.component';
import { DashboardComponent    }   from './pages/dashboard/dashboard.component';
import { ProductStatsComponent }   from './pages/product_stats/product_stats.component';
import { OrderStatsComponent   }   from './pages/order_stats/order_stats.component';
import { ProductsComponent     }   from './pages/products/products.component';
import { CustomersComponent    }   from './pages/customers/customers.component';
import { OrdersComponent       }   from './pages/orders/orders.component';
import { OrderDetailsComponent }   from './pages/order_details/order_details.component';
import { EmployeesComponent    }   from './pages/employees/employees.component';

import { AuthGuard } from './services/auth_guard.service';
import { PageNotFoundComponent }  from './pages/404/page-not-found.component';

const routes: Routes = [
  //Important: The sequence of path is important as the router go over then in sequential manner
  { path: '', redirectTo: '/home/dashboard/order', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    canActivate:[AuthGuard],
    children:[  // Children paths are appended to the parent path
        { path: '', redirectTo: '/home/dashboard/order', pathMatch: 'full' },  // Default path (if no deep path is specified for home component like webui/home then it will by default show ProductsComponent )
        {
            path     : 'dashboard',
            component: DashboardComponent,
            data     : [{selectedHeaderItemIndex:0, selectedSubNavItemIndex:-1}],
            children :[
                { path: ''        , redirectTo: '/home/dashboard/order', pathMatch: 'full'},
                { path: 'order'   , component: OrderStatsComponent     , data:[{selectedHeaderItemIndex:0, selectedSubNavItemIndex:0}]  },
                { path: 'product' , component: ProductStatsComponent   , data:[{selectedHeaderItemIndex:0, selectedSubNavItemIndex:1}]  }
            ]
        },
        { path:'orders'    , component: OrdersComponent      , data:[{selectedHeaderItemIndex:1, selectedSubNavItemIndex:-1}]  },
        { path:'orders/:id', component: OrderDetailsComponent, data:[{selectedHeaderItemIndex:1, selectedSubNavItemIndex:-1}]  },
        { path:'products'  , component: ProductsComponent    , data:[{selectedHeaderItemIndex:2, selectedSubNavItemIndex:-1}]  },
        { path:'customers' , component: CustomersComponent   , data:[{selectedHeaderItemIndex:3, selectedSubNavItemIndex:-1}]  },
        { path:'employees' , component: EmployeesComponent   , data:[{selectedHeaderItemIndex:4, selectedSubNavItemIndex:-1}]  },
    ]
  },
  { path: 'login',  component: LoginComponent  },
  { path: 'logout', component: LogoutComponent },
  { path: '**', component: PageNotFoundComponent }

];
@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash:true} )],
  exports: [ RouterModule ],
  declarations:[PageNotFoundComponent]
})
export class AppRoutingModule {}
