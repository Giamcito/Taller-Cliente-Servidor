import { Component, inject } from '@angular/core';
import { AlertComponent } from '../../components/alert/alert.component';
import { CategoriesTable } from '../../components/categories-table/categories-table';
import { Category } from '../../interfaces/categories.interface';
import { State } from '../../interfaces/state.interface';
import { CategoriesService } from '../../services/categories/categories.service';

@Component({
  selector: 'app-categories',
  imports: [CategoriesTable, AlertComponent],
  templateUrl: './categories.html',
  styleUrl: './categories.scss',
})
export class Categories {
  categories: Category[] = [];
  state: State = 'init';

  private categoriesService = inject(CategoriesService);

  ngOnInit(): void {
    this.state = 'loading';
    this.categoriesService.getAllCategories(10).subscribe({
      next: (categories) => {
        this.categories = categories;
        this.state = 'success';
      },
      error: (error) => {
        console.error(error);
        this.state = 'error';
      },
    });
  }

}
