import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatingLotComponent } from './creating-lot.component';

describe('CreatingLotComponent', () => {
  let component: CreatingLotComponent;
  let fixture: ComponentFixture<CreatingLotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatingLotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatingLotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
