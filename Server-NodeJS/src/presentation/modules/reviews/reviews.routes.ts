import { Router } from 'express';
import { ReviewsController } from './reviews.controller';

const controller = new ReviewsController();

/**
 * @openapi
 * /api/reviews/{countReviews}:
 *   get:
 *     summary: Obtener listado de reseñas
 *     description: Retorna una lista de reseñas generadas dinámicamente según la cantidad solicitada.
 *     tags:
 *       - Reviews
 *     parameters:
 *       - in: path
 *         name: countReviews
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *           example: 5
 *         description: Cantidad de reseñas a generar
 *     responses:
 *       200:
 *         description: Lista de reseñas generadas correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Review'
 *       400:
 *         description: Parámetro inválido o cantidad no válida
 *       500:
 *         description: Error interno del servidor
 */
export const ReviewsRoutes = {
	get routes(): Router {
		const router = Router();

		router.get('/:countReviews', controller.getAllReviews);

		return router;
	}
};
