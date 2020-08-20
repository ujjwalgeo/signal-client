import { Component, OnInit } from '@angular/core';
import {AppStateService} from '../../services/app-state.service';
import {GeonodeApiService} from '../../services/geonode-api.service';
import {GroupProfile} from '../../services/models/models';

@Component({
  selector: 'app-project-selector',
  templateUrl: './project-selector.component.html',
  styleUrls: ['./project-selector.component.scss']
})
export class ProjectSelectorComponent implements OnInit {
  public groups: Map<string, GroupProfile> = new Map<string, GroupProfile>();
  public groupsArray: Array<GroupProfile> = new Array<GroupProfile>();
  public selectedGroup: GroupProfile = null;
  constructor(private appStateService: AppStateService, private apiService: GeonodeApiService) { }

  ngOnInit(): void {
    this.apiService.getUserProfile().subscribe((user) => {
      if (user) {
        for (const group of user.groups) {
          if (!((group === 'anonymous') || (group === 'registered-members'))) {
            this.groups.set(group, null);
          }
        }
        this.apiService.getGroupProfiles().subscribe((groupProfiles) => {
          for (const groupProfile of groupProfiles) {
            if (this.groups.has(groupProfile.slug)) {
              this.groups.set(groupProfile.slug, groupProfile);
            }
          }
          if (this.groups.size > 0) {
            this.groupsArray = Array.from(this.groups.values());
            this.selectedGroup = this.groupsArray[0];
          }
        });
      }
    });
  }
}
