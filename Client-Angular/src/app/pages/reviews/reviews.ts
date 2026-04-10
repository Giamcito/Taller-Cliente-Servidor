import { Component, inject } from '@angular/core';
import { AlertComponent } from '../../components/alert/alert.component';
import { ReviewsTable } from '../../components/reviews-table/reviews-table';
import { Review } from '../../interfaces/reviews.interface';
import { State } from '../../interfaces/state.interface';
import { ReviewsService } from '../../services/reviews/reviews.service';

@Component({
  selector: 'app-reviews',
  imports: [ReviewsTable, AlertComponent],
  templateUrl: './reviews.html',
  styleUrl: './reviews.scss',
})
export class Reviews {
  reviews: Review[] = [];
  state: State = 'init';

  private reviewsService = inject(ReviewsService);

  ngOnInit(): void {
    this.state = 'loading';
    this.reviewsService.getAllReviews(10).subscribe({
      next: (reviews) => {
        this.reviews = reviews;
        this.state = 'success';
      },
      error: (error) => {
        console.error(error);
        this.state = 'error';
      },
    });
  }

}
