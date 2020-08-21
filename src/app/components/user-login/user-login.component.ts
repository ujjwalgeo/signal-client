import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';
import {AppStateService} from '../../services/app-state.service';
import {GeonodeApiService} from '../../services/geonode-api.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  public oauthUrl: string;
  public forgotPasswordUrl: string;
  public signupUrl: string;

  constructor(private appStateService: AppStateService, private geonodeApiService: GeonodeApiService,
              private router: Router) {
    this.oauthUrl = environment.geonode.oauth.url;
    this.forgotPasswordUrl = environment.geonode.host + 'account/password/reset/';
    this.signupUrl = environment.geonode.host + 'account/signup/';
  }

  ngOnInit(): void {
  }

  isLoggedIn(): boolean {
    const isAuthenticated = this.geonodeApiService.isAuthenticated();
    // console.log(isAuthenticated);
    return isAuthenticated;
  }

  logout(): void {
    this.geonodeApiService.logout();
    this.appStateService.userProfile$.next(null);
    this.router.navigate(['/logout-page']);
  }
}
