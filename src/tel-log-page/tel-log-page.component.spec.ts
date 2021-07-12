import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelLogPageComponent } from './tel-log-page.component';

describe('TelLogPageComponent', () => {
  let component: TelLogPageComponent;
  let fixture: ComponentFixture<TelLogPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelLogPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelLogPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
