/**
 * @openapi
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       description: Representa un usuario del sistema
 *       required:
 *         - id
 *         - name
 *         - lastName
 *         - age
 *         - email
 *         - engineering
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         name:
 *           type: string
 *           example: Carlos
 *         lastName:
 *           type: string
 *           example: Ramírez
 *         age:
 *           type: number
 *           example: 22
 *         email:
 *           type: string
 *           format: email
 *           example: carlos.ramirez@example.com
 *         engineering:
 *           type: string
 *           enum:
 *             - Sistemas
 *             - Electronica
 *             - Biomedica
 *             - Industrial
 *             - Ambiental
 *           example: Sistemas
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       description: Representa un producto del sistema
 *       required:
 *         - id
 *         - name
 *         - category
 *         - price
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         name:
 *           type: string
 *           example: Leche entera
 *         category:
 *           type: string
 *           enum:
 *             - Lacteos
 *             - Carnes
 *             - Frutas
 *             - Verduras
 *           example: Lacteos
 *         price:
 *           type: number
 *           example: 4500
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Order:
 *       type: object
 *       description: Representa una orden del sistema
 *       required:
 *         - id
 *         - customerName
 *         - total
 *         - status
 *         - createdAt
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         customerName:
 *           type: string
 *           example: Juan Pérez
 *         total:
 *           type: number
 *           example: 125000
 *         status:
 *           type: string
 *           enum:
 *             - Pendiente
 *             - Pagada
 *             - Enviada
 *             - Cancelada
 *           example: Pagada
 *         createdAt:
 *           type: string
 *           format: date-time
 *           example: 2026-04-09T10:30:00.000Z
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       description: Representa una categoría del sistema
 *       required:
 *         - id
 *         - name
 *         - description
 *         - active
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         name:
 *           type: string
 *           example: Electrónica
 *         description:
 *           type: string
 *           example: Productos y accesorios tecnológicos
 *         active:
 *           type: boolean
 *           example: true
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Review:
 *       type: object
 *       description: Representa una reseña del sistema
 *       required:
 *         - id
 *         - author
 *         - productName
 *         - rating
 *         - comment
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         author:
 *           type: string
 *           example: María López
 *         productName:
 *           type: string
 *           example: Mouse inalámbrico
 *         rating:
 *           type: number
 *           minimum: 1
 *           maximum: 5
 *           example: 4
 *         comment:
 *           type: string
 *           example: Muy buen producto y llegó rápido.
 */
export { };
