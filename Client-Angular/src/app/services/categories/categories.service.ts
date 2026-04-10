import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../interfaces/categories.interface';

/**
 * Servicio encargado de la gestión de categorías.
 */
@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private httpClient = inject(HttpClient);

  getAllCategories(countCategories: number): Observable<Category[]> {
    return this.httpClient.get<Category[]>(`api/categories/${countCategories}`);
  }
}