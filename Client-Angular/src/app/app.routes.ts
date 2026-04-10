import { Routes } from '@angular/router';
import { Categories } from './pages/categories/categories';
import { Orders } from './pages/orders/orders';
import { ProductsPage } from './pages/products/products.page';
import { Reviews } from './pages/reviews/reviews';
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

  { path: 'categories', component: Categories },

  /**
   * Ruta de órdenes.
   *
   * @remarks
   * Renderiza el componente `Orders`, encargado
   * de mostrar y gestionar el listado de órdenes.
   */

  { path: 'orders', component: Orders },

  /**
   * Ruta de reseñas.
   *
   * @remarks
   * Renderiza el componente `Reviews`, encargado
   * de mostrar y gestionar el listado de reseñas.
   */

  { path: 'reviews', component: Reviews },

  /**
   * Ruta comodín.
   *
   * @remarks
   * Captura cualquier ruta no definida y redirige
   * automáticamente a la ruta de usuarios.
   */
  { path: '**', redirectTo: 'users' },
];