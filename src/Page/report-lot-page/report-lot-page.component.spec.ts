import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportLotPageComponent } from './report-lot-page.component';

describe('ReportLotPageComponent', () => {
  let component: ReportLotPageComponent;
  let fixture: ComponentFixture<ReportLotPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportLotPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportLotPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
