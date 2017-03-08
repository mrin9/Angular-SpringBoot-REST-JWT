
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { HttpModule }       from '@angular/http';
import { MaterialModule }   from '@angular/material';
import { RouterModule }     from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

//Third Party Modules
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxChartsModule }    from '@swimlane/ngx-charts';
import { ClarityModule }      from 'clarity-angular';

// Compinents and Pages
import { AppComponent }       from './app.component';
import { PillComponent }      from './components/pill/pill.component';
import { BadgeComponent }     from './components/badge/badge.component';
import { LegendComponent }    from './components/legend/legend.component';

import { HnavComponent }      from './components/hnav/hnav.component';
import { LogoComponent }      from './components/logo/logo.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';

//Pages
import { HomeComponent }      from './home.component';
import { LoginComponent }     from './components/pages/login/login.component';
import { AlertsComponent }    from './components/pages/alerts/alerts.component';

import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { PolicyComponent    } from './components/pages/policy/policy.component';
import { PolicyDetailComponent    } from './components/pages/policy-detail/policy-detail.component';

import { IncidentsComponent } from './components/pages/incidents/incidents.component';
import { SettingsComponent  } from './components/pages/settings/settings.component';

import { SignupComponent }    from './components/pages/signup/signup.component';


// Services
import { AuthGuard       } from './routing_guards/auth.guard';
import { TranslateService} from './api/translate.service';
import { LoginService    } from './api/login.service';
import { IncidentService } from './api/incident.service';
import { PolicyService   } from './api/policy.service';

@NgModule({

  imports: [
    AppRoutingModule,
    BrowserModule,
    //BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpModule,

    // Thirdparty Module
    NgxDatatableModule,
    NgxChartsModule,
    ClarityModule.forChild()

  ],

  declarations: [
    AppComponent,
    PillComponent,
    BadgeComponent,
    LegendComponent,
    HnavComponent,
    AlertsComponent,
    HomeComponent,
    LogoComponent,
    AppFooterComponent,
    LoginComponent,
    SignupComponent,

    DashboardComponent,
    PolicyComponent,
    PolicyDetailComponent,
    IncidentsComponent,
    SettingsComponent

  ],

  providers:[
    AuthGuard,
    TranslateService,
    LoginService,
    IncidentService,
    PolicyService,
    {provide: 'api', useValue:  window.location.protocol +'//' + window.location.hostname + (window.location.port===''?'/':':9119/') }
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }
