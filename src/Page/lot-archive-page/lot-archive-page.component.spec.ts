import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LotArchivePageComponent } from './lot-archive-page.component';

describe('LotArchivePageComponent', () => {
  let component: LotArchivePageComponent;
  let fixture: ComponentFixture<LotArchivePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LotArchivePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LotArchivePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
