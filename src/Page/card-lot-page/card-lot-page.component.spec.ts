import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLotPageComponent } from './card-lot-page.component';

describe('CardLotPageComponent', () => {
  let component: CardLotPageComponent;
  let fixture: ComponentFixture<CardLotPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardLotPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardLotPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
