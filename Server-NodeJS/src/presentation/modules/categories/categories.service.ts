import { faker } from '@faker-js/faker';
import { Category } from '../../../domain/interfaces/category.interface';

/**
 * Servicio encargado de la generación de categorías.
 */
export class CategoriesService {
	public async getAllCategories(countCategories: number): Promise<Category[]> {
		const categories: Promise<Category>[] = [];

		for (let index = 1; index <= countCategories; index++) {
			categories.push(this.generateCategory(index));
		}

		return Promise.all(categories);
	}

	private generateCategory(id: number): Promise<Category> {
		return Promise.resolve({
			id,
			name: faker.commerce.department(),
			description: faker.commerce.productDescription(),
			active: faker.datatype.boolean(),
		});
	}
}
