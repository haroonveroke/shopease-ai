import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="orders">
      <h1>Orders</h1>
      <p>This is the orders page</p>
    </div>
  `,
  styles: [`
    .orders {
      padding: 20px;
      color: #ffffff;
    }
  `]
})
export class OrdersComponent {} 