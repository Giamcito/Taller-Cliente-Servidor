import { Request, Response } from 'express';
import { HandleError } from '../../../domain/erros/handle.error';
import { CategoriesService } from './categories.service';

/**
 * Controlador de categorías.
 */
export class CategoriesController {
	private readonly categoriesService = new CategoriesService();

	getAllCategories = (req: Request, res: Response): void => {
		const { countCategories } = req.params;

		setTimeout(() => {
			this.categoriesService
				.getAllCategories(Number(countCategories))
				.then((categories) => res.status(200).json(categories))
				.catch((error) => HandleError.error(error, res));
		}, 3000);
	};
}
