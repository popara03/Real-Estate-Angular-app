import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BathroomModalComponent } from './bathroom-modal.component';

describe('BathroomModalComponent', () => {
  let component: BathroomModalComponent;
  let fixture: ComponentFixture<BathroomModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BathroomModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BathroomModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
