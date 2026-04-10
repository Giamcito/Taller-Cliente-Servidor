import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../../interfaces/orders.interface';

/**
 * Servicio encargado de la gestión de órdenes.
 */
@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private httpClient = inject(HttpClient);

  getAllOrders(countOrders: number): Observable<Order[]> {
    return this.httpClient.get<Order[]>(`api/orders/${countOrders}`);
  }
}