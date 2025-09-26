import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products-list',
  template: ` <div>
    <h1>product-list-component</h1>
    <a [routerLink]="['products/product-details']"></a>
  </div>`,
  standalone: true,
  imports: [RouterLink],
})
export class ProductsListComponent {}
