import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarAuctionsComponent } from './car-auctions.component';

describe('CarAuctionsComponent', () => {
  let component: CarAuctionsComponent;
  let fixture: ComponentFixture<CarAuctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarAuctionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarAuctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
