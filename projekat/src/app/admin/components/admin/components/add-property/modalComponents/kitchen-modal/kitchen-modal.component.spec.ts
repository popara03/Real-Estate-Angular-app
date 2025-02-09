import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenModalComponent } from './kitchen-modal.component';

describe('KitchenModalComponent', () => {
  let component: KitchenModalComponent;
  let fixture: ComponentFixture<KitchenModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KitchenModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KitchenModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
