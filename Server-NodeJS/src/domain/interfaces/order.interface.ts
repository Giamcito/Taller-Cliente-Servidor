/**
 * Interfaz que representa una orden del sistema.
 *
 * Cada orden agrupa información básica para ser consumida por el cliente.
 */
export interface Order {
	id: number;
	customerName: string;
	total: number;
	status: OrderStatus;
	createdAt: string;
}

/**
 * Estados permitidos para una orden.
 */
export type OrderStatus = 'Pendiente' | 'Pagada' | 'Enviada' | 'Cancelada';
