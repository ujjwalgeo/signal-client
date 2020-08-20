import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of, combineLatest } from 'rxjs';
import { AppStateService } from './app-state.service';
import { map, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AppStateResolverService implements Resolve<boolean> {
  constructor(private appStateService: AppStateService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return combineLatest([
      this.appStateService.userProfile$,
    ]).pipe(
      first(),
      map((_) => true)
    );
  }
}
