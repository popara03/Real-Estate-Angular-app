import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarageModalComponent } from './garage-modal.component';

describe('GarageModalComponent', () => {
  let component: GarageModalComponent;
  let fixture: ComponentFixture<GarageModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GarageModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GarageModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
