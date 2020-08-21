import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthLandingComponent} from './components/auth-landing/auth-landing.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {AuthGuardService} from './services/auth-guard.service';
import {LoginPageComponent} from './components/login-page/login-page.component';
import {LogoutPageComponent} from './components/logout-page/logout-page.component';
import {AppStateResolverService} from './services/app-state-resolver.service';
import {HomePageComponent} from './components/home-page/home-page.component';
import {DocDetailComponent} from './components/doc-detail/doc-detail.component';


const routes: Routes = [
    { path: 'auth-landing', component: AuthLandingComponent },
    { path: 'login-page', component: LoginPageComponent },
    { path: 'logout-page', component: LogoutPageComponent },
    {
        path: 'dashboard/:groupName',
        component: DashboardComponent,
        canActivate: [AuthGuardService],
        resolve: {isInitialized: AppStateResolverService},
    },
    {
        path: 'doc/:docTitle',
        component: DocDetailComponent,
        canActivate: [AuthGuardService],
    },
    { path: 'home', component: HomePageComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
