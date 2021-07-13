import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLotReversComponent } from './new-lot-revers.component';

describe('NewLotReversComponent', () => {
  let component: NewLotReversComponent;
  let fixture: ComponentFixture<NewLotReversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewLotReversComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLotReversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
