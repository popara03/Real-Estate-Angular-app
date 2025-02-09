import { TestBed } from '@angular/core/testing';

import { GetPropertiesService } from './get-properties.service';

describe('GetPropertiesService', () => {
  let service: GetPropertiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPropertiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
