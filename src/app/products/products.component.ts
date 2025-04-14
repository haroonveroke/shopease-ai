import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="products">
      <h1>Products</h1>
      <p>This is the products page</p>
    </div>
  `,
  styles: [`
    .products {
      padding: 20px;
      color: #ffffff;
    }
  `]
})
export class ProductsComponent {} 