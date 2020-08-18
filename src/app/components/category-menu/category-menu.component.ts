import { Component, OnInit } from '@angular/core';
import {GeonodeApiService} from '../../services/geonode-api.service';
import {AppStateService} from '../../services/app-state.service';
import {GeonodeUser, Category} from '../../services/models/models';
import { combineLatest } from 'rxjs';


@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.scss']
})
export class CategoryMenuComponent implements OnInit {

  public categories: Category[];
  public nested: Map<number, Category> = new Map<number, Category>();
  public nestedArr: Array<Category> = new Array<Category>();

  constructor(private apiService: GeonodeApiService, private appStateService: AppStateService) {
  }

  nestIt(categories: Category[]) {
    for (const category of categories) {
      if (category.parent_id === null) {
        category.children = [];
        this.nested[category.parent_id] = category;
        continue;
      }
      if (this.nested.has(category.parent_id)) {
        this.nested.get(category.parent_id).children.push(category);
      } else {
        let parent: Category = null;
        for (const cat of categories) {
          if (cat.id === category.parent_id) {
            parent = cat;
            parent.children = [];
          }
        }
        this.nested[category.parent_id] = parent;
        parent.children.push(category);
      }
    }
  }

  getCategories() {
    this.apiService.getCategories().subscribe((categories) => {
      this.categories = categories;
      console.log(categories);
      this.nestIt(categories);
      console.log(this.nested);
      for (const key of this.nested.keys()) {
        this.nestedArr.push(this.nested.get(key));
      }
      console.log(this.nestedArr);
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
