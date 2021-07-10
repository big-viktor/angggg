import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DamagePageComponent } from './damage-page.component';

describe('DamagePageComponent', () => {
  let component: DamagePageComponent;
  let fixture: ComponentFixture<DamagePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DamagePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DamagePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
