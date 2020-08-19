import { Component, OnInit } from '@angular/core';
import { GeonodeApiService } from '../../services/geonode-api.service';
import { AppStateService } from '../../services/app-state.service';
import { GeonodeUser, Category } from '../../services/models/models';
import { combineLatest } from 'rxjs';


@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.scss']
})
export class CategoryMenuComponent implements OnInit {

  public categories: Category[];
  public lookup: Map<number, Category> = new Map<number, Category>();
  public dashboard: Category;
  public nestedArr: Array<Category> = new Array<Category>();

  constructor(private apiService: GeonodeApiService, private appStateService: AppStateService) {
  }

  getCategories() {
    this.apiService.getCategories().subscribe((categories) => {
      this.categories = categories;
      this.lookup = new Map<number, Category>();
      let root: Category;
      for (const cat of categories) {
        if (cat.parent_id === null) {
          root = cat;
        }
        this.lookup.set(cat.id, cat);
        if (!cat.children) {
          cat.children = new Array<Category>();
        }
      }
      for (const cat of categories) {
        if (cat.parent_id) {
          const parent = this.lookup.get(cat.parent_id);
          parent.children.push(cat);
        }
      }
      this.dashboard = root;
    });
  }

  public trackByFn(index, item) {
    if (!item) {
      return null;
    }
    return item.id;
  }

  ngOnInit(): void {
    this.apiService.getUserProfile().subscribe((profile) => {
      if (profile) {
        this.getCategories();
      }
    });
  }
}
