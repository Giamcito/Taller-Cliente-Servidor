/**
 * Calificación permitida para una reseña.
 */
export type ReviewRating = 1 | 2 | 3 | 4 | 5;

/**
 * Interfaz que representa una reseña del sistema.
 */
export interface Review {
  id: number;
  author: string;
  productName: string;
  rating: ReviewRating;
  comment: string;
}