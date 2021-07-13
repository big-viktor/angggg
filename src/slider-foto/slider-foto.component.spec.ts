import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderFotoComponent } from './slider-foto.component';

describe('SliderFotoComponent', () => {
  let component: SliderFotoComponent;
  let fixture: ComponentFixture<SliderFotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderFotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
