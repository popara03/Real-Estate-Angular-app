import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyDetailsCardComponent } from './property-details-card.component';

describe('PropertyDetailsCardComponent', () => {
  let component: PropertyDetailsCardComponent;
  let fixture: ComponentFixture<PropertyDetailsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PropertyDetailsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
