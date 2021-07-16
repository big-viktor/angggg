import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarAuctionsPageReversComponent } from './car-auctions-page-revers.component';

describe('CarAuctionsPageReversComponent', () => {
  let component: CarAuctionsPageReversComponent;
  let fixture: ComponentFixture<CarAuctionsPageReversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarAuctionsPageReversComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarAuctionsPageReversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
