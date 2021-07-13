import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarAuctionsPageComponent } from './car-auctions-page.component';

describe('CarAuctionsPageComponent', () => {
  let component: CarAuctionsPageComponent;
  let fixture: ComponentFixture<CarAuctionsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarAuctionsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarAuctionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
