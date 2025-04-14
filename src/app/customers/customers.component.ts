import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="customers">
      <h1>Customers</h1>
      <p>This is the customers page</p>
    </div>
  `,
  styles: [`
    .customers {
      padding: 20px;
      color: #ffffff;
    }
  `]
})
export class CustomersComponent {} 