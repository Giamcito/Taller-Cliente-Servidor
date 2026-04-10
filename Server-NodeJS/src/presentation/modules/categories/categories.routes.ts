import { Router } from 'express';
import { CategoriesController } from './categories.controller';

export const CategoriesRoutes = {
	get routes(): Router {
		const router = Router();
		const controller = new CategoriesController();

		router.get('/:countCategories', controller.getAllCategories);

		return router;
	}
};
