import { TestBed } from '@angular/core/testing';

import { GeonodeApiService } from './geonode-api.service';

describe('GeonodeApiService', () => {
  let service: GeonodeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeonodeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
