import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedLotPageComponent } from './selected-lot-page.component';

describe('SelectedLotPageComponent', () => {
  let component: SelectedLotPageComponent;
  let fixture: ComponentFixture<SelectedLotPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedLotPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedLotPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
