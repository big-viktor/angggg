import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerBorderComponent } from './partner-border.component';

describe('PartnerBorderComponent', () => {
  let component: PartnerBorderComponent;
  let fixture: ComponentFixture<PartnerBorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerBorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerBorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
