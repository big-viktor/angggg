import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLotClosedComponent } from './new-lot-closed.component';

describe('NewLotClosedComponent', () => {
  let component: NewLotClosedComponent;
  let fixture: ComponentFixture<NewLotClosedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewLotClosedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLotClosedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
