import { TestBed } from '@angular/core/testing';

import { InsertElementService } from './insert-element.service';

describe('InsertElementService', () => {
  let service: InsertElementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsertElementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
