import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedLotsComponent } from './completed-lots.component';

describe('CompletedLotsComponent', () => {
  let component: CompletedLotsComponent;
  let fixture: ComponentFixture<CompletedLotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletedLotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedLotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
