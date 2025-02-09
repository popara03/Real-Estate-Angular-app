import { TestBed } from '@angular/core/testing';

import { GetDdlFilterDataService } from './get-ddl-filter-data.service';

describe('GetDdlFilterDataService', () => {
  let service: GetDdlFilterDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDdlFilterDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
