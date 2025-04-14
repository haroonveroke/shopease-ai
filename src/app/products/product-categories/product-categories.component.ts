import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-categories',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatGridListModule],
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.scss']
})
export class ProductCategoriesComponent implements OnInit {
  categories: string[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.categories = this.productService.getCategories();
  }
} 