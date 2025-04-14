import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './auth/auth.guard';
import { OrderListComponent } from './orders/order-list/order-list.component';
import { OrderDetailComponent } from './orders/order-detail/order-detail.component';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'products',
        loadComponent: () => import('./products/product-categories/product-categories.component').then(m => m.ProductCategoriesComponent)
      },
      {
        path: 'products/:category',
        loadComponent: () => import('./products/product-list/product-list.component').then(m => m.ProductListComponent)
      },
      {
        path: 'orders',
        component: OrderListComponent
      },
      {
        path: 'orders/:id',
        component: OrderDetailComponent
      },
      {
        path: 'customers',
        loadComponent: () => import('./customers/customers.component').then(m => m.CustomersComponent)
      }
    ]
  }
];
