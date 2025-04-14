import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';

interface NavigationLink {
  path: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  searchQuery: string = '';
  isProfileDropdownOpen: boolean = false;

  navigationLinks: NavigationLink[] = [
    { path: '/dashboard', label: 'Dashboard', icon: 'dashboard' },
    { path: '/products', label: 'Products', icon: 'inventory_2' },
    { path: '/orders', label: 'Orders', icon: 'shopping_cart' },
    { path: '/customers', label: 'Customers', icon: 'people' },
  ];

  constructor(private authService: AuthService) {}

  onSearch(): void {
    // Implement search functionality
    console.log('Searching for:', this.searchQuery);
  }

  toggleProfileDropdown(): void {
    this.isProfileDropdownOpen = !this.isProfileDropdownOpen;
  }

  logout(): void {
    this.authService.logout();
  }
} 