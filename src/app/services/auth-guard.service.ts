import { Injectable } from '@angular/core';
import {GeonodeApiService} from './geonode-api.service';
import {CanActivate, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private api: GeonodeApiService, private router: Router) { }

  canActivate(): boolean {
    if (!this.api.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
