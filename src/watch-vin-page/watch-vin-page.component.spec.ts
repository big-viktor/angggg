import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchVinPageComponent } from './watch-vin-page.component';

describe('WatchVinPageComponent', () => {
  let component: WatchVinPageComponent;
  let fixture: ComponentFixture<WatchVinPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchVinPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchVinPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
