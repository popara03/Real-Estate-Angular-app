import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewElementFormComponent } from './new-element-form.component';

describe('NewElementFormComponent', () => {
  let component: NewElementFormComponent;
  let fixture: ComponentFixture<NewElementFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewElementFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewElementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
