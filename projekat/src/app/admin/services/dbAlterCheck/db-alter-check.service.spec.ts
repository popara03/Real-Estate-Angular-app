import { TestBed } from '@angular/core/testing';

import { DbAlterCheckService } from './db-alter-check.service';

describe('DbAlterCheckService', () => {
  let service: DbAlterCheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbAlterCheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
