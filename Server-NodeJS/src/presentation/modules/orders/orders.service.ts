import { faker } from '@faker-js/faker';
import { Order, OrderStatus } from '../../../domain/interfaces/order.interface';

/**
 * Servicio encargado de la generación de órdenes.
 */
export class OrdersService {
	private statuses: OrderStatus[] = ['Pendiente', 'Pagada', 'Enviada', 'Cancelada'];

	public async getAllOrders(countOrders: number): Promise<Order[]> {
		const orders: Promise<Order>[] = [];

		for (let index = 1; index <= countOrders; index++) {
			orders.push(this.generateOrder(index));
		}

		return Promise.all(orders);
	}

	private generateOrder(id: number): Promise<Order> {
		return Promise.resolve({
			id,
			customerName: faker.person.fullName(),
			total: Number(faker.commerce.price({ min: 10000, max: 500000, dec: 0 })),
			status: faker.helpers.arrayElement(this.statuses),
			createdAt: faker.date.recent({ days: 30 }).toISOString(),
		});
	}
}
