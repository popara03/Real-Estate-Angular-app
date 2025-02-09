import { TestBed } from '@angular/core/testing';

import { PropertyInsertObjectBuilderService } from './property-insert-object-builder.service';

describe('PropertyInsertObjectBuilderService', () => {
  let service: PropertyInsertObjectBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropertyInsertObjectBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
