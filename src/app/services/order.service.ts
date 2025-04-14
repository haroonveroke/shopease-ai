import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

export interface Order {
  id: string;
  date: Date;
  totalAmount: number;
  status: 'Pending' | 'Shipped' | 'Delivered';
  items: OrderItem[];
  shippingAddress: string;
  paymentMethod: string;
  estimatedDeliveryDate?: Date;
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private mockOrders: Order[] = [
    {
      id: 'ORD-001',
      date: new Date('2024-03-15'),
      totalAmount: 299.99,
      status: 'Delivered',
      items: [
        { id: '1', name: 'Smartphone X', quantity: 1, price: 299.99 }
      ],
      shippingAddress: '123 Main St, New York, NY 10001',
      paymentMethod: 'Credit Card',
      estimatedDeliveryDate: new Date('2024-03-20')
    },
    {
      id: 'ORD-002',
      date: new Date('2024-04-01'),
      totalAmount: 499.98,
      status: 'Shipped',
      items: [
        { id: '2', name: 'Laptop Pro', quantity: 1, price: 999.99 },
        { id: '3', name: 'Wireless Mouse', quantity: 1, price: 29.99 }
      ],
      shippingAddress: '456 Oak Ave, Los Angeles, CA 90001',
      paymentMethod: 'PayPal',
      estimatedDeliveryDate: new Date('2024-04-10')
    },
    {
      id: 'ORD-003',
      date: new Date('2024-04-10'),
      totalAmount: 199.99,
      status: 'Pending',
      items: [
        { id: '4', name: 'Headphones Pro', quantity: 1, price: 199.99 }
      ],
      shippingAddress: '789 Pine St, Chicago, IL 60601',
      paymentMethod: 'Credit Card',
      estimatedDeliveryDate: new Date('2024-04-15')
    }
  ];

  getOrders(): Observable<Order[]> {
    return of(this.mockOrders);
  }

  getOrderById(id: string): Observable<Order | undefined> {
    const order = this.mockOrders.find(o => o.id === id);
    return of(order);
  }
} 