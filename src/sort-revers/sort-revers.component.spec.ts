import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortReversComponent } from './sort-revers.component';

describe('SortReversComponent', () => {
  let component: SortReversComponent;
  let fixture: ComponentFixture<SortReversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortReversComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortReversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
