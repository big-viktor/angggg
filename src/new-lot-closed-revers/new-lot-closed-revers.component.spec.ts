import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLotClosedReversComponent } from './new-lot-closed-revers.component';

describe('NewLotClosedReversComponent', () => {
  let component: NewLotClosedReversComponent;
  let fixture: ComponentFixture<NewLotClosedReversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewLotClosedReversComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLotClosedReversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
