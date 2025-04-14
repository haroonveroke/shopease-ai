import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  registrationDate: Date;
  totalOrders: number;
  status: 'Active' | 'Inactive';
  address: string;
}

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customers: Customer[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1234567890',
      registrationDate: new Date('2023-01-15'),
      totalOrders: 5,
      status: 'Active',
      address: '123 Main St, City, Country'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '+1987654321',
      registrationDate: new Date('2023-02-20'),
      totalOrders: 3,
      status: 'Active',
      address: '456 Oak Ave, Town, Country'
    },
    {
      id: 3,
      name: 'Bob Johnson',
      email: 'bob@example.com',
      phone: '+1122334455',
      registrationDate: new Date('2023-03-10'),
      totalOrders: 0,
      status: 'Inactive',
      address: '789 Pine Rd, Village, Country'
    },
    {
      id: 4,
      name: 'Sarah Williams',
      email: 'sarah@example.com',
      phone: '+1555666777',
      registrationDate: new Date('2023-04-01'),
      totalOrders: 1,
      status: 'Active',
      address: '654 Maple Dr, Seattle, WA 98101'
    },
    {
      id: 5,
      name: 'Michael Brown',
      email: 'michael@example.com',
      phone: '+1666777888',
      registrationDate: new Date('2023-04-05'),
      totalOrders: 1,
      status: 'Active',
      address: '987 Cedar Ln, Miami, FL 33101'
    },
    {
      id: 6,
      name: 'Emily Davis',
      email: 'emily@example.com',
      phone: '+1777888999',
      registrationDate: new Date('2023-04-10'),
      totalOrders: 1,
      status: 'Active',
      address: '147 Birch Rd, Denver, CO 80202'
    },
    {
      id: 7,
      name: 'David Wilson',
      email: 'david@example.com',
      phone: '+1888999000',
      registrationDate: new Date('2023-04-12'),
      totalOrders: 1,
      status: 'Active',
      address: '258 Willow Ave, Austin, TX 78701'
    },
    {
      id: 8,
      name: 'Jennifer Taylor',
      email: 'jennifer@example.com',
      phone: '+1999000111',
      registrationDate: new Date('2023-04-15'),
      totalOrders: 1,
      status: 'Active',
      address: '369 Oakwood Dr, San Francisco, CA 94101'
    },
    {
      id: 9,
      name: 'Robert Anderson',
      email: 'robert@example.com',
      phone: '+1000111222',
      registrationDate: new Date('2023-04-18'),
      totalOrders: 1,
      status: 'Active',
      address: '741 Pinecrest Ln, Portland, OR 97201'
    },
    {
      id: 10,
      name: 'Lisa Martinez',
      email: 'lisa@example.com',
      phone: '+1111222333',
      registrationDate: new Date('2023-04-20'),
      totalOrders: 1,
      status: 'Active',
      address: '852 Maplewood Ave, Philadelphia, PA 19101'
    },
    {
      id: 11,
      name: 'Thomas Clark',
      email: 'thomas@example.com',
      phone: '+1222333444',
      registrationDate: new Date('2023-04-22'),
      totalOrders: 1,
      status: 'Active',
      address: '963 Cedarwood Dr, Dallas, TX 75201'
    }
  ];

  constructor() { }

  getCustomers(): Observable<Customer[]> {
    return of(this.customers);
  }

  getCustomerById(id: number): Observable<Customer | undefined> {
    const customer = this.customers.find(c => c.id === id);
    return of(customer);
  }

  searchCustomers(query: string): Observable<Customer[]> {
    const lowerQuery = query.toLowerCase();
    return of(this.customers.filter(customer => 
      customer.name.toLowerCase().includes(lowerQuery) ||
      customer.email.toLowerCase().includes(lowerQuery)
    ));
  }
} 