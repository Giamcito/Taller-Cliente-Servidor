import { Router } from 'express';
import { ReviewsController } from './reviews.controller';

export const ReviewsRoutes = {
	get routes(): Router {
		const router = Router();
		const controller = new ReviewsController();

		router.get('/:countReviews', controller.getAllReviews);

		return router;
	}
};
