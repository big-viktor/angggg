import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTariffPageComponent } from './my-tariff-page.component';

describe('MyTariffPageComponent', () => {
  let component: MyTariffPageComponent;
  let fixture: ComponentFixture<MyTariffPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTariffPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTariffPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
