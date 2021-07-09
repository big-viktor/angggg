import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatingLotPageComponent } from './creating-lot-page.component';

describe('CreatingLotPageComponent', () => {
  let component: CreatingLotPageComponent;
  let fixture: ComponentFixture<CreatingLotPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatingLotPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatingLotPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
