/**
 * Interfaz que representa una reseña del sistema.
 */
export interface Review {
	id: number;
	author: string;
	productName: string;
	rating: number;
	comment: string;
}
