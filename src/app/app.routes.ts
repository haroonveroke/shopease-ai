import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './auth/auth.guard';

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
        path: 'products/:category/:id',
        loadComponent: () => import('./products/product-detail/product-detail.component').then(m => m.ProductDetailComponent)
      },
      {
        path: 'orders',
        loadComponent: () => import('./orders/orders.component').then(m => m.OrdersComponent)
      },
      {
        path: 'customers',
        loadComponent: () => import('./customers/customers.component').then(m => m.CustomersComponent)
      }
    ]
  }
];
