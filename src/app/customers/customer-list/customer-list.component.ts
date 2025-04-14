import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { CustomerService, Customer } from '../../services/customer.service';
import { Observable, debounceTime, distinctUntilChanged, switchMap, startWith, of } from 'rxjs';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    FormsModule
  ],
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  dataSource = new MatTableDataSource<Customer>([]);
  displayedColumns: string[] = ['name', 'email', 'registrationDate', 'totalOrders', 'status', 'actions'];
  private searchTerms = new Subject<string>();
  private statusFilter = new Subject<string>();

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.searchTerms.pipe(
      startWith(''),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => 
        term ? this.customerService.searchCustomers(term) : this.customerService.getCustomers()
      )
    ).subscribe(customers => {
      this.dataSource.data = customers || [];
    });

    this.statusFilter.pipe(
      startWith('all'),
      switchMap((status: string) => 
        status === 'all' ? this.customerService.getCustomers() : 
        this.customerService.getCustomers().pipe(
          switchMap(customers => 
            of(customers.filter(c => c.status === status))
          )
        )
      )
    ).subscribe(customers => {
      this.dataSource.data = customers || [];
    });
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  filterByStatus(status: string): void {
    this.statusFilter.next(status);
  }

  formatDate(date: Date): string {
    return new Date(date).toLocaleDateString();
  }
} 