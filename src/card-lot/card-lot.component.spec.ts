import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLotComponent } from './card-lot.component';

describe('CardLotComponent', () => {
  let component: CardLotComponent;
  let fixture: ComponentFixture<CardLotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardLotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardLotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
