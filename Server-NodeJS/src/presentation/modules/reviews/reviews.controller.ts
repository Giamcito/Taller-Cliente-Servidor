import { Request, Response } from 'express';
import { HandleError } from '../../../domain/erros/handle.error';
import { ReviewsService } from './reviews.service';

/**
 * Controlador de reseñas.
 */
export class ReviewsController {
	private readonly reviewsService = new ReviewsService();

	getAllReviews = (req: Request, res: Response): void => {
		const { countReviews } = req.params;

		this.reviewsService
			.getAllReviews(Number(countReviews))
			.then((reviews) => res.status(200).json(reviews))
			.catch((error) => HandleError.error(error, res));
	};
}
