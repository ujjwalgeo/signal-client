import { TestBed } from '@angular/core/testing';

import { AppStateResolverService } from './app-state-resolver.service';

describe('AppStateResolverService', () => {
  let service: AppStateResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppStateResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
