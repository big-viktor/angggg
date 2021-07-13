import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownCheckMenuComponent } from './down-check-menu.component';

describe('DownCheckMenuComponent', () => {
  let component: DownCheckMenuComponent;
  let fixture: ComponentFixture<DownCheckMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownCheckMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownCheckMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
