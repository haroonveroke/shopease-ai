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
    },
    {
      id: 'ORD-004',
      date: new Date('2024-04-05'),
      totalAmount: 899.97,
      status: 'Delivered',
      items: [
        { id: '5', name: 'Smart Watch', quantity: 2, price: 199.99 },
        { id: '6', name: 'Fitness Tracker', quantity: 1, price: 99.99 }
      ],
      shippingAddress: '321 Elm St, Boston, MA 02108',
      paymentMethod: 'Credit Card',
      estimatedDeliveryDate: new Date('2024-04-12')
    },
    {
      id: 'ORD-005',
      date: new Date('2024-04-08'),
      totalAmount: 1299.95,
      status: 'Shipped',
      items: [
        { id: '7', name: 'Gaming Console', quantity: 1, price: 499.99 },
        { id: '8', name: 'Gaming Controller', quantity: 2, price: 59.99 },
        { id: '9', name: 'Gaming Headset', quantity: 1, price: 79.99 }
      ],
      shippingAddress: '654 Maple Dr, Seattle, WA 98101',
      paymentMethod: 'PayPal',
      estimatedDeliveryDate: new Date('2024-04-15')
    },
    {
      id: 'ORD-006',
      date: new Date('2024-04-12'),
      totalAmount: 449.97,
      status: 'Pending',
      items: [
        { id: '10', name: 'Tablet Mini', quantity: 1, price: 299.99 },
        { id: '11', name: 'Tablet Case', quantity: 1, price: 29.99 },
        { id: '12', name: 'Screen Protector', quantity: 2, price: 9.99 }
      ],
      shippingAddress: '987 Cedar Ln, Miami, FL 33101',
      paymentMethod: 'Credit Card',
      estimatedDeliveryDate: new Date('2024-04-18')
    },
    {
      id: 'ORD-007',
      date: new Date('2024-04-15'),
      totalAmount: 1799.94,
      status: 'Delivered',
      items: [
        { id: '13', name: 'Ultra HD TV', quantity: 1, price: 1299.99 },
        { id: '14', name: 'Soundbar', quantity: 1, price: 199.99 },
        { id: '15', name: 'TV Mount', quantity: 1, price: 99.99 }
      ],
      shippingAddress: '147 Birch Rd, Denver, CO 80202',
      paymentMethod: 'Credit Card',
      estimatedDeliveryDate: new Date('2024-04-20')
    },
    {
      id: 'ORD-008',
      date: new Date('2024-04-18'),
      totalAmount: 349.98,
      status: 'Shipped',
      items: [
        { id: '16', name: 'Wireless Earbuds', quantity: 2, price: 99.99 },
        { id: '17', name: 'Charging Case', quantity: 1, price: 49.99 }
      ],
      shippingAddress: '258 Willow Ave, Austin, TX 78701',
      paymentMethod: 'PayPal',
      estimatedDeliveryDate: new Date('2024-04-25')
    },
    {
      id: 'ORD-009',
      date: new Date('2024-04-20'),
      totalAmount: 599.97,
      status: 'Pending',
      items: [
        { id: '18', name: 'Digital Camera', quantity: 1, price: 399.99 },
        { id: '19', name: 'Camera Bag', quantity: 1, price: 49.99 },
        { id: '20', name: 'Memory Card', quantity: 2, price: 74.99 }
      ],
      shippingAddress: '369 Oakwood Dr, San Francisco, CA 94101',
      paymentMethod: 'Credit Card',
      estimatedDeliveryDate: new Date('2024-04-27')
    },
    {
      id: 'ORD-010',
      date: new Date('2024-04-22'),
      totalAmount: 1299.96,
      status: 'Shipped',
      items: [
        { id: '21', name: 'Smart Home Hub', quantity: 1, price: 199.99 },
        { id: '22', name: 'Smart Light Bulbs', quantity: 4, price: 24.99 },
        { id: '23', name: 'Smart Plug', quantity: 2, price: 19.99 },
        { id: '24', name: 'Smart Doorbell', quantity: 1, price: 199.99 }
      ],
      shippingAddress: '741 Pinecrest Ln, Portland, OR 97201',
      paymentMethod: 'PayPal',
      estimatedDeliveryDate: new Date('2024-04-29')
    },
    {
      id: 'ORD-011',
      date: new Date('2024-04-25'),
      totalAmount: 799.95,
      status: 'Delivered',
      items: [
        { id: '25', name: 'Wireless Keyboard', quantity: 1, price: 99.99 },
        { id: '26', name: 'Wireless Mouse', quantity: 1, price: 49.99 },
        { id: '27', name: 'Monitor Stand', quantity: 1, price: 79.99 },
        { id: '28', name: 'Desk Lamp', quantity: 1, price: 39.99 }
      ],
      shippingAddress: '852 Maplewood Ave, Philadelphia, PA 19101',
      paymentMethod: 'Credit Card',
      estimatedDeliveryDate: new Date('2024-05-02')
    },
    {
      id: 'ORD-012',
      date: new Date('2024-04-28'),
      totalAmount: 449.97,
      status: 'Pending',
      items: [
        { id: '29', name: 'Bluetooth Speaker', quantity: 2, price: 149.99 },
        { id: '30', name: 'Speaker Stand', quantity: 1, price: 29.99 }
      ],
      shippingAddress: '963 Cedarwood Dr, Dallas, TX 75201',
      paymentMethod: 'PayPal',
      estimatedDeliveryDate: new Date('2024-05-05')
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