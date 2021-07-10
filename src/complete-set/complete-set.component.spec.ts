import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteSetComponent } from './complete-set.component';

describe('CompleteSetComponent', () => {
  let component: CompleteSetComponent;
  let fixture: ComponentFixture<CompleteSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompleteSetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
