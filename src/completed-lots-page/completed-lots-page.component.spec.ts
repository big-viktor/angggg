import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedLotsPageComponent } from './completed-lots-page.component';

describe('CompletedLotsPageComponent', () => {
  let component: CompletedLotsPageComponent;
  let fixture: ComponentFixture<CompletedLotsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletedLotsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedLotsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
