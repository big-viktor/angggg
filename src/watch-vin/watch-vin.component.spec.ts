import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchVinComponent } from './watch-vin.component';

describe('WatchVinComponent', () => {
  let component: WatchVinComponent;
  let fixture: ComponentFixture<WatchVinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchVinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchVinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
