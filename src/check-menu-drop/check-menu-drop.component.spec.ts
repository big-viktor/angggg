import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckMenuDropComponent } from './check-menu-drop.component';

describe('CheckMenuDropComponent', () => {
  let component: CheckMenuDropComponent;
  let fixture: ComponentFixture<CheckMenuDropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckMenuDropComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckMenuDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
