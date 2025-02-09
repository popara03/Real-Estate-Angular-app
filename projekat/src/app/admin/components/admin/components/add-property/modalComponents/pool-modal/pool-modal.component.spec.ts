import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolModalComponent } from './pool-modal.component';

describe('PoolModalComponent', () => {
  let component: PoolModalComponent;
  let fixture: ComponentFixture<PoolModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoolModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoolModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
