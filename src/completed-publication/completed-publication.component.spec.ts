import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedPublicationComponent } from './completed-publication.component';

describe('CompletedPublicationComponent', () => {
  let component: CompletedPublicationComponent;
  let fixture: ComponentFixture<CompletedPublicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletedPublicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedPublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
