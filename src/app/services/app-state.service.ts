import { Injectable } from '@angular/core';
import { ReplaySubject, BehaviorSubject } from 'rxjs';
import {Category, GeonodeUser, GroupProfile, SignalDoc} from './models/models';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  public userProfile$: BehaviorSubject<GeonodeUser> = new BehaviorSubject<GeonodeUser>(null);
  public selectedGroup$: BehaviorSubject<GroupProfile> = new BehaviorSubject<GroupProfile>(null);
  public selectedCategory$: BehaviorSubject<Category> = new BehaviorSubject<Category>(null);
  public selectedDoc$: BehaviorSubject<SignalDoc> = new BehaviorSubject<SignalDoc>(null);
  constructor() { }
}
