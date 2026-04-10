import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsTable } from './reviews-table';

describe('ReviewsTable', () => {
  let component: ReviewsTable;
  let fixture: ComponentFixture<ReviewsTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewsTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewsTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
