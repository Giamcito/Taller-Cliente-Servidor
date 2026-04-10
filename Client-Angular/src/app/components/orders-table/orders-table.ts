import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { Order, OrderStatus } from '../../interfaces/orders.interface';

@Component({
  selector: 'app-orders-table',
  imports: [BadgeAtom],
  templateUrl: './orders-table.html',
  styleUrl: './orders-table.scss',
})
export class OrdersTable {
  @Input() orders: Order[] = [];

  private statusMap: Record<OrderStatus, BadgeType> = {
    'Pendiente': 'warning',
    'Pagada': 'success',
    'Enviada': 'primary',
    'Cancelada': 'danger',
  };

  getBadgeType(status: OrderStatus): BadgeType {
    return this.statusMap[status];
  }

}
