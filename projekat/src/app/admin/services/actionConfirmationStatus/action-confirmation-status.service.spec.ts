import { TestBed } from '@angular/core/testing';

import { ActionConfirmationStatusService } from './action-confirmation-status.service';

describe('ActionConfirmationStatusService', () => {
  let service: ActionConfirmationStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActionConfirmationStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
