import { Component, OnInit } from '@angular/core';
import {AppStateService} from '../../services/app-state.service';
import {GeonodeApiService} from '../../services/geonode-api.service';
import {Collection, GroupProfile, SignalDoc} from '../../services/models/models';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public selectedGroup: GroupProfile;
  public selectedCollection: Collection;
  public docs: SignalDoc[];

  constructor(private appStateService: AppStateService, private apiService: GeonodeApiService,
              private router: Router) { }

  ngOnInit(): void {
    this.appStateService.selectedGroup$.subscribe((selectedGroup) => {
      this.selectedGroup = selectedGroup;
      this.apiService.getGroupCollections(selectedGroup).subscribe((collections) => {
        if (collections.length > 0) {
          this.selectedCollection = collections[0];
        }
      });
    });

    this.appStateService.selectedCategory$.subscribe((category) => {
      this.apiService.getCollectionDocs(this.selectedCollection, category).subscribe((docs) => {
        this.docs = docs;
        console.log(docs);
      });
    });
  }

  openDoc(doc: SignalDoc, ev): boolean {
    this.appStateService.selectedDoc$.next(doc);
    this.router.navigate(['/doc', doc.title]);
    ev.preventDefault();
    ev.stopPropagation();
    return false;
  }
}
