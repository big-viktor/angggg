import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerImgPageComponent } from './partner-img-page.component';

describe('PartnerImgPageComponent', () => {
  let component: PartnerImgPageComponent;
  let fixture: ComponentFixture<PartnerImgPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerImgPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerImgPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
