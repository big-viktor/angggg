import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortReversTwoComponent } from './sort-revers-two.component';

describe('SortReversTwoComponent', () => {
  let component: SortReversTwoComponent;
  let fixture: ComponentFixture<SortReversTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortReversTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortReversTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
