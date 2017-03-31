
import { BrowserModule }    from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule }         from '@angular/core';
import { HttpModule }       from '@angular/http';
import { RouterModule }     from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

//Third Party Modules
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxChartsModule }    from '@swimlane/ngx-charts';
import { ClarityModule }      from 'clarity-angular';
//import { InfiniteScrollModule } from 'angular2-infinite-scroll';

import { AppComponent }       from './app.component';

// Directives
import { TrackScrollDirective }      from './directives/track_scroll/track_scroll.directive';

// Components
import { BadgeComponent }     from './components/badge/badge.component';
import { LegendComponent }    from './components/legend/legend.component';
import { LogoComponent }      from './components/logo/logo.component';

//Pages
import { HomeComponent         } from './home.component';
import { LoginComponent        } from './pages/login/login.component';
import { LogoutComponent       } from './pages/logout/logout.component';
import { DashboardComponent    } from './pages/dashboard/dashboard.component';
import { OrderStatsComponent   } from './pages/order_stats/order_stats.component';
import { ProductStatsComponent } from './pages/product_stats/product_stats.component';

import { ProductsComponent   } from './pages/products/products.component';
import { CustomersComponent  } from './pages/customers/customers.component';
import { OrdersComponent     } from './pages/orders/orders.component';
import { OrderDetailsComponent } from './pages/order_details/order_details.component';
import { EmployeesComponent  } from './pages/employees/employees.component';


// Services
import { AppConfig        } from './app-config';
import { AuthGuard        } from './services/auth_guard.service';
import { ApiRequestService} from './services/api/api_request.service';
import { TranslateService } from './services/api/translate.service';
import { LoginService     } from './services/api/login.service';
import { OrderService     } from './services/api/order.service';
import { ProductService   } from './services/api/product.service';
import { CustomerService  } from './services/api/customer.service';
import { EmployeeService  } from './services/api/employee.service';


@NgModule({

  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,

    // Thirdparty Module
    //InfiniteScrollModule,
    NgxDatatableModule,
    NgxChartsModule,
    ClarityModule.forChild()

  ],

  declarations: [
    AppComponent,
    BadgeComponent,
    LegendComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    LogoComponent,
    DashboardComponent,
    ProductStatsComponent,
    OrderStatsComponent,
    ProductsComponent,
    EmployeesComponent,
    CustomersComponent,
    OrdersComponent,
    OrderDetailsComponent,
    TrackScrollDirective
  ],

  providers:[
    AuthGuard,
    TranslateService,
    ApiRequestService,
    LoginService,
    OrderService,
    ProductService,
    CustomerService,
    EmployeeService,
    AppConfig,
    //{provide: 'appConfig', useClass: AppConfig },
    {provide: 'api', useValue:  window.location.protocol +'//' + window.location.hostname + (window.location.port===''?'/':':9119/') }
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }
