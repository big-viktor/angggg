import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportLotComponent } from './report-lot.component';

describe('ReportLotComponent', () => {
  let component: ReportLotComponent;
  let fixture: ComponentFixture<ReportLotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportLotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportLotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
