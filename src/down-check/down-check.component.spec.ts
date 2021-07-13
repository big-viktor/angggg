import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownCheckComponent } from './down-check.component';

describe('DownCheckComponent', () => {
  let component: DownCheckComponent;
  let fixture: ComponentFixture<DownCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
