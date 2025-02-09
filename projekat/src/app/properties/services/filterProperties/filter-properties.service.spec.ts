import { TestBed } from '@angular/core/testing';

import { FilterPropertiesService } from './filter-properties.service';

describe('FilterPropertiesService', () => {
  let service: FilterPropertiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterPropertiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
