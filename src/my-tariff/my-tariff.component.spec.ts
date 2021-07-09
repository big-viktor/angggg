import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTariffComponent } from './my-tariff.component';

describe('MyTariffComponent', () => {
  let component: MyTariffComponent;
  let fixture: ComponentFixture<MyTariffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTariffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTariffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
