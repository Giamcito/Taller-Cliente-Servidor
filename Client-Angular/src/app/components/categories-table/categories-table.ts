import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { Category } from '../../interfaces/categories.interface';

@Component({
  selector: 'app-categories-table',
  imports: [BadgeAtom],
  templateUrl: './categories-table.html',
  styleUrl: './categories-table.scss',
})
export class CategoriesTable {
	@Input() categories: Category[] = [];

	getBadgeType(active: boolean): BadgeType {
		return active ? 'success' : 'danger';
	}

}
