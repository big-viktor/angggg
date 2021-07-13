import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedLotPageComponent } from './closed-lot-page.component';

describe('ClosedLotPageComponent', () => {
  let component: ClosedLotPageComponent;
  let fixture: ComponentFixture<ClosedLotPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClosedLotPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosedLotPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
