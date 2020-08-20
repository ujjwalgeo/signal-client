import { Injectable } from '@angular/core';
import { ReplaySubject, BehaviorSubject } from 'rxjs';
import { GeonodeUser } from './models/models';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  public userProfile$: BehaviorSubject<GeonodeUser> = new BehaviorSubject<GeonodeUser>(null);
  constructor() { }
}
