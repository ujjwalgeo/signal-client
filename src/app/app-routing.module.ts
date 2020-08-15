import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLandingComponent } from './components/auth-landing/auth-landing.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AppStateResolverService } from './services/app-state-resolver.service';


const routes: Routes = [
  { path: 'auth-landing', component: AuthLandingComponent },
  {
    path: 'dashboard/:userName',
    component: DashboardComponent,
    canActivate: [AuthGuardService],
    resolve: { isInitialized: AppStateResolverService },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
