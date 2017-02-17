import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent  }       from './home.component';
import { LoginComponent }       from './components/pages/login/login.component';

import { DashboardComponent   }   from './components/pages/dashboard/dashboard.component';
import { PolicyComponent      }   from './components/pages/policy/policy.component';
import { PolicyDetailComponent}   from './components/pages/policy-detail/policy-detail.component';
import { IncidentsComponent   }   from './components/pages/incidents/incidents.component';
import { SettingsComponent    }   from './components/pages/settings/settings.component';
import { SignupComponent      }   from './components/pages/signup/signup.component';

import { AuthGuard } from './routing_guards/auth.guard';
import { PageNotFoundComponent }  from './components/pages/404/page-not-found.component';

const routes: Routes = [
  //Important: The sequence of path is important as the router go over then in sequential manner
  { path: 'login',  component: LoginComponent  },
  { path: 'signup', component: SignupComponent },
  {
    path: 'home',
    component: HomeComponent,
    canActivate:[AuthGuard],
    children:[  // Children paths are appended to the parent path
      {
        path:'', // Default path (if no deep path is specified for home component like webui/home then it will by default show ProductsComponent )
        children:[
          { path: '',  component: DashboardComponent  },
          { path: 'dashboard'    , component: DashboardComponent,  data:[{comp:'dashboard' }]},
          { path: 'policy'       , component: PolicyComponent   ,  data:[{comp:'policy'}]},
          { path: 'policy-detail/:id', component: PolicyDetailComponent, data:[{comp:'policy'}]},
          { path: 'incidents'    , component: IncidentsComponent,  data:[{comp:'incidents'}]},
          { path: 'settings'     , component: SettingsComponent ,  data:[{comp:'settings' }]}
        ]
      }
    ]
  },
  { path: '', redirectTo: '/home/dashboard', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }

];
@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash:true} )],
  exports: [ RouterModule ],
  declarations:[PageNotFoundComponent]
})
export class AppRoutingModule {}
