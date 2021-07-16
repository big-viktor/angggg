import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSettingPageComponent } from './info-setting-page.component';

describe('InfoSettingPageComponent', () => {
  let component: InfoSettingPageComponent;
  let fixture: ComponentFixture<InfoSettingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoSettingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoSettingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
