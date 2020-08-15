import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { GeonodeUser } from './models/models';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  public user$: ReplaySubject<GeonodeUser> = new ReplaySubject<GeonodeUser>(1);
  constructor() { }
}
