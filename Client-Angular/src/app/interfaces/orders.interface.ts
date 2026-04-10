/**
 * Estados disponibles para una orden.
 */
export type OrderStatus = 'Pendiente' | 'Pagada' | 'Enviada' | 'Cancelada';

/**
 * Interfaz que representa una orden del sistema.
 */
export interface Order {
  id: number;
  customerName: string;
  total: number;
  status: OrderStatus;
  createdAt: string;
}