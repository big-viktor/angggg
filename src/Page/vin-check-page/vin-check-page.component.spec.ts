import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinCheckPageComponent } from './vin-check-page.component';

describe('VinCheckPageComponent', () => {
  let component: VinCheckPageComponent;
  let fixture: ComponentFixture<VinCheckPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VinCheckPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VinCheckPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
