import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedLotComponent } from './closed-lot.component';

describe('ClosedLotComponent', () => {
  let component: ClosedLotComponent;
  let fixture: ComponentFixture<ClosedLotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClosedLotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosedLotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
