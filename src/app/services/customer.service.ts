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