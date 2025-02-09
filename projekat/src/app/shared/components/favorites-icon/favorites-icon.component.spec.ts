import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesIconComponent } from './favorites-icon.component';

describe('FavoritesIconComponent', () => {
  let component: FavoritesIconComponent;
  let fixture: ComponentFixture<FavoritesIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoritesIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoritesIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
