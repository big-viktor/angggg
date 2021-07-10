import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationReviewComponent } from './publication-review.component';

describe('PublicationReviewComponent', () => {
  let component: PublicationReviewComponent;
  let fixture: ComponentFixture<PublicationReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicationReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
