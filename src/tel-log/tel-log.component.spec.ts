import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelLogComponent } from './tel-log.component';

describe('TelLogComponent', () => {
  let component: TelLogComponent;
  let fixture: ComponentFixture<TelLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
