import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteSetPageComponent } from './complete-set-page.component';

describe('CompleteSetPageComponent', () => {
  let component: CompleteSetPageComponent;
  let fixture: ComponentFixture<CompleteSetPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompleteSetPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteSetPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
