import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedPublicationPageComponent } from './completed-publication-page.component';

describe('CompletedPublicationPageComponent', () => {
  let component: CompletedPublicationPageComponent;
  let fixture: ComponentFixture<CompletedPublicationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletedPublicationPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedPublicationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
