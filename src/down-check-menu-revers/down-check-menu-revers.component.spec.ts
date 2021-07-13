import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownCheckMenuReversComponent } from './down-check-menu-revers.component';

describe('DownCheckMenuReversComponent', () => {
  let component: DownCheckMenuReversComponent;
  let fixture: ComponentFixture<DownCheckMenuReversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownCheckMenuReversComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownCheckMenuReversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
