import { faker } from '@faker-js/faker';
import { Review } from '../../../domain/interfaces/review.interface';

/**
 * Servicio encargado de la generación de reseñas.
 */
export class ReviewsService {
	public async getAllReviews(countReviews: number): Promise<Review[]> {
		const reviews: Promise<Review>[] = [];

		for (let index = 1; index <= countReviews; index++) {
			reviews.push(this.generateReview(index));
		}

		return Promise.all(reviews);
	}

	private generateReview(id: number): Promise<Review> {
		return Promise.resolve({
			id,
			author: faker.person.fullName(),
			productName: faker.commerce.productName(),
			rating: faker.number.int({ min: 1, max: 5 }),
			comment: faker.lorem.sentence(),
		});
	}
}
