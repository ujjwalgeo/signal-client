import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { AuthLandingComponent } from './components/auth-landing/auth-landing.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {TokenInterceptorService} from './services/token-interceptor.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LogoutPageComponent } from './components/logout-page/logout-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CategoryMenuComponent } from './components/category-menu/category-menu.component';
import { ProjectSelectorComponent } from './components/project-selector/project-selector.component';
import { DocDetailComponent } from './components/doc-detail/doc-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    AuthLandingComponent,
    DashboardComponent,
    LoginPageComponent,
    LogoutPageComponent,
    HomePageComponent,
    CategoryMenuComponent,
    ProjectSelectorComponent,
    DocDetailComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatSidenavModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
    ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
