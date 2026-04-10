import { Router } from 'express';
import { OrdersController } from './orders.controller';

export const OrdersRoutes = {
	get routes(): Router {
		const router = Router();
		const controller = new OrdersController();

		router.get('/:countOrders', controller.getAllOrders);

		return router;
	}
};
