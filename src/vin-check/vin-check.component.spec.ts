import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinCheckComponent } from './vin-check.component';

describe('VinCheckComponent', () => {
  let component: VinCheckComponent;
  let fixture: ComponentFixture<VinCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VinCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VinCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
