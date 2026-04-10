import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { Review, ReviewRating } from '../../interfaces/reviews.interface';

@Component({
  selector: 'app-reviews-table',
  imports: [BadgeAtom],
  templateUrl: './reviews-table.html',
  styleUrl: './reviews-table.scss',
})
export class ReviewsTable {
  @Input() reviews: Review[] = [];

  private ratingMap: Record<ReviewRating, BadgeType> = {
    1: 'danger',
    2: 'danger',
    3: 'warning',
    4: 'primary',
    5: 'success',
  };

  getBadgeType(rating: ReviewRating): BadgeType {
    return this.ratingMap[rating];
  }

}
