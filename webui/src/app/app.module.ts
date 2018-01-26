
import { BrowserModule }    from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule }         from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule }     from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

//Third Party Modules
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxChartsModule    } from '@swimlane/ngx-charts';
import { ClarityModule      } from '@clr/angular';

//Local App Modules
import { AppRoutingModule } from './app-routing.module';

// Directives
import { TrackScrollDirective } from './directives/track_scroll/track_scroll.directive';


// Components
import { BadgeComponent  } from './components/badge/badge.component';
import { LegendComponent } from './components/legend/legend.component';
import { LogoComponent   } from './components/logo/logo.component';

//Pages  -- Pages too are components, they contain other components
import { AppComponent }       from './app.component';
import { HomeComponent         } from './home.component';
import { LoginComponent        } from './pages/login/login.component';
import { LogoutComponent       } from './pages/logout/logout.component';
import { DashboardComponent    } from './pages/dashboard/dashboard.component';
import { OrderStatsComponent   } from './pages/order_stats/order_stats.component';
import { ProductStatsComponent } from './pages/product_stats/product_stats.component';
import { ProductsComponent     } from './pages/products/products.component';
import { CustomersComponent    } from './pages/customers/customers.component';
import { OrdersComponent       } from './pages/orders/orders.component';
import { OrderDetailsComponent } from './pages/order_details/order_details.component';
import { EmployeesComponent    } from './pages/employees/employees.component';


// Services
import { AppConfig        } from './app-config';
import { UserInfoService  } from './services/user-info.service';
import { AuthGuard        } from './services/auth_guard.service';
import { ApiRequestService} from './services/api/api-request.service';
import { TranslateService } from './services/api/translate.service';
import { LoginService     } from './services/api/login.service';
import { OrderService     } from './services/api/order.service';
import { ProductService   } from './services/api/product.service';
import { CustomerService  } from './services/api/customer.service';
import { EmployeeService  } from './services/api/employee.service';


@NgModule({

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    // Thirdparty Module
    NgxDatatableModule,
    NgxChartsModule,
    ClarityModule.forChild(),

    // Local App Modules
    AppRoutingModule


  ],

  declarations: [
    // Components
    BadgeComponent,
    LegendComponent,
    LogoComponent,

    //Pages -- Pages too are components, they contain other components
    AppComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    DashboardComponent,
    ProductStatsComponent,
    OrderStatsComponent,
    ProductsComponent,
    EmployeesComponent,
    CustomersComponent,
    OrdersComponent,
    OrderDetailsComponent,

    //Directives
    TrackScrollDirective
  ],

  providers:[
    AuthGuard,
    UserInfoService,
    TranslateService,
    ApiRequestService,
    LoginService,
    OrderService,
    ProductService,
    CustomerService,
    EmployeeService,
    AppConfig,
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }
