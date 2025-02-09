import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BedroomModalComponent } from './bedroom-modal.component';

describe('BedroomModalComponent', () => {
  let component: BedroomModalComponent;
  let fixture: ComponentFixture<BedroomModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BedroomModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BedroomModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
