import { TestBed } from '@angular/core/testing';

import { InsertCityService } from './insert-city.service';

describe('InsertCityService', () => {
  let service: InsertCityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsertCityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
