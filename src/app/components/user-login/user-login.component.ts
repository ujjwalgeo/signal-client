import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';
import {AppStateService} from '../../services/app-state.service';
import {GeonodeApiService} from '../../services/geonode-api.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  public oauthUrl: string;
  public forgotPasswordUrl: string;
  public signupUrl: string;

  constructor(private appStateService: AppStateService, private geonodeApiService: GeonodeApiService) {
    this.oauthUrl = environment.geonode.oauth.url;
    this.forgotPasswordUrl = environment.geonode.host + 'account/password/reset/';
    this.signupUrl = environment.geonode.host + 'account/signup/';
  }

  ngOnInit(): void {
  }

  isLoggedIn(): boolean {
    return this.geonodeApiService.isAuthenticated();
  }

  logout(): void {
    this.geonodeApiService.logout();
  }
}
