import { TestBed } from '@angular/core/testing';

import { ManageFavoritesService } from './manage-favorites.service';

describe('ManageFavoritesService', () => {
  let service: ManageFavoritesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageFavoritesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
