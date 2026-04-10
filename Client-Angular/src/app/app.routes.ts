import { Routes } from '@angular/router';
import { CategoriesTable } from './components/categories-table/categories-table';
import { OrdersTable } from './components/orders-table/orders-table';
import { ReviewsTable } from './components/reviews-table/reviews-table';
import { ProductsPage } from './pages/products/products.page';
import { UsersPage } from './pages/users/users.page';

/**
 * Definición de las rutas principales de la aplicación.
 *
 * @remarks
 * Este archivo contiene la configuración de enrutamiento
 * utilizada por Angular Router para mapear las URLs
 * a los componentes correspondientes.
 *
 * Incluye:
 * - Rutas de navegación principales
 * - Redirección por defecto para rutas no existentes
 *
 * @see {@link UsersPage}
 * @see {@link ProductsPage}
 */
export const routes: Routes = [

  /**
   * Ruta de usuarios.
   *
   * @remarks
   * Renderiza el componente `UsersPage`, encargado
   * de mostrar y gestionar el listado de usuarios.
   */
  { path: 'users', component: UsersPage },

  /**
   * Ruta de productos.
   *
   * @remarks
   * Renderiza el componente `ProductsPage`, encargado
   * de mostrar y gestionar el listado de productos.
   */
  { path: 'products', component: ProductsPage },

  /**
   * Ruta de categorías.
   *
   * @remarks
   * Renderiza el componente `Categories`, encargado
   * de mostrar y gestionar el listado de categorías.
   */

  { path: 'categories', component: CategoriesTable },

  /**
   * Ruta de órdenes.
   *
   * @remarks
   * Renderiza el componente `Orders`, encargado
   * de mostrar y gestionar el listado de órdenes.
   */

  {path: 'orders', component: OrdersTable },

  /**
   * Ruta de reseñas.
   *
   * @remarks
   * Renderiza el componente `Reviews`, encargado
   * de mostrar y gestionar el listado de reseñas.
   */

  { path: 'reviews', component: ReviewsTable },

  /**
   * Ruta comodín.
   *
   * @remarks
   * Captura cualquier ruta no definida y redirige
   * automáticamente a la ruta de usuarios.
   */
  { path: '**', redirectTo: 'users' },
];