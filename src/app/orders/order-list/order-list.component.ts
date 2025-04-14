import { Component, OnInit } from '@angular/core';
import { OrderService, Order } from '../../services/order.service';
import { CustomerService, Customer } from '../../services/customer.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    MatChipsModule
  ],
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  orders: Order[] = [];
  customers: Customer[] = [];

  constructor(
    private orderService: OrderService,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this.orderService.getOrders().subscribe(orders => {
      this.orders = orders;
    });

    this.customerService.getCustomers().subscribe(customers => {
      this.customers = customers;
    });
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'Pending':
        return 'warn';
      case 'Shipped':
        return 'accent';
      case 'Delivered':
        return 'primary';
      default:
        return 'primary';
    }
  }

  getCustomerName(customerId: number): string {
    const customer = this.customers.find(c => c.id === customerId);
    return customer ? customer.name : 'Unknown Customer';
  }
} 