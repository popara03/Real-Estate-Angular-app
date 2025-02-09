import { TestBed } from '@angular/core/testing';

import { GetSinglePropertyService } from './get-single-property.service';

describe('GetSinglePropertyService', () => {
  let service: GetSinglePropertyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSinglePropertyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
