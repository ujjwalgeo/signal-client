import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { GeonodeApiService } from '../../services/geonode-api.service';
import { first } from 'rxjs/operators';
import {AppStateService} from '../../services/app-state.service';


@Component({
  selector: 'app-auth-landing',
  templateUrl: './auth-landing.component.html',
  styleUrls: ['./auth-landing.component.scss'],
})
export class AuthLandingComponent implements OnInit {
  constructor(
    private router: Router,
    private api: GeonodeApiService,
    private appState: AppStateService
  ) {}

  parseQueryString(queryString?: string): any {
    if (!queryString) {
      queryString = window.location.search.substring(1);
    }
    const params = {};
    queryString = queryString.split('#')[1];
    const queries = queryString.split('&');
    queries.forEach((indexQuery: string) => {
      const indexPair = indexQuery.split('=');
      const queryKey = decodeURIComponent(indexPair[0]);
      const queryValue = decodeURIComponent(
        indexPair.length > 1 ? indexPair[1] : ''
      );
      params[queryKey] = queryValue;
    });
    return params;
  }

  parseToken(): boolean {
    const params = this.parseQueryString(this.router.url);
    if (params.hasOwnProperty('access_token')) {
      const accessTokenData = {
        access_token: params.access_token,
        expires_in: params.expires_in,
        token_type: params.token_type,
        scope: params.scope,
        state: params.state,
      };
      console.log(accessTokenData);
      localStorage.setItem('accessToken', accessTokenData.access_token);
      return true;
    }
    return false;
  }

  ngOnInit(): void {
    // parseToken is true only if accessToken is returned in callback
    if (!this.parseToken()) {
      return;
    }

    this.api.getUserProfile().subscribe((geoNodeUserProfile) => {
      localStorage.setItem('userProfile', JSON.stringify(geoNodeUserProfile));
      this.router.navigate(['/dashboard', geoNodeUserProfile.name]);
    });
  }
}
