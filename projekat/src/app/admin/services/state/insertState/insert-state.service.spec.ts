import { TestBed } from '@angular/core/testing';

import { InsertStateService } from './insert-state.service';

describe('InsertStateService', () => {
  let service: InsertStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsertStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
