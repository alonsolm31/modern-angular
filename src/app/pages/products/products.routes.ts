import { Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details.component';
import { ProductsListComponent } from './products-list.component';

export const routes: Routes = [
  { path: 'products-list', component: ProductsListComponent },
  {
    path: 'product-details/:id',
    component: ProductDetailsComponent,
  },
];
