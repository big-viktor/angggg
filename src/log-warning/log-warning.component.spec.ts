import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogWarningComponent } from './log-warning.component';

describe('LogWarningComponent', () => {
  let component: LogWarningComponent;
  let fixture: ComponentFixture<LogWarningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogWarningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
