import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    // Electronics
    {
      id: 1,
      name: 'Smartphone X',
      price: 999.99,
      category: 'Electronics',
      description: 'Latest smartphone with advanced features and 5G connectivity',
      image: 'https://via.placeholder.com/300x200?text=Smartphone'
    },
    {
      id: 2,
      name: 'Laptop Pro',
      price: 1299.99,
      category: 'Electronics',
      description: 'High-performance laptop with 16GB RAM and 1TB SSD',
      image: 'https://via.placeholder.com/300x200?text=Laptop'
    },
    {
      id: 3,
      name: 'Wireless Headphones',
      price: 199.99,
      category: 'Electronics',
      description: 'Premium noise-cancelling headphones with 30-hour battery life',
      image: 'https://via.placeholder.com/300x200?text=Headphones'
    },
    {
      id: 9,
      name: 'Smart Watch',
      price: 249.99,
      category: 'Electronics',
      description: 'Fitness tracker with heart rate monitor and GPS',
      image: 'https://via.placeholder.com/300x200?text=Smart+Watch'
    },
    {
      id: 13,
      name: 'Gaming Console',
      price: 399.99,
      category: 'Electronics',
      description: 'Next-gen gaming experience with 4K resolution',
      image: 'https://via.placeholder.com/300x200?text=Gaming+Console'
    },
    {
      id: 16,
      name: '4K Smart TV',
      price: 799.99,
      category: 'Electronics',
      description: '55-inch 4K UHD Smart TV with HDR',
      image: 'https://via.placeholder.com/300x200?text=Smart+TV'
    },
    {
      id: 24,
      name: 'Tablet Pro',
      price: 499.99,
      category: 'Electronics',
      description: '10-inch tablet with stylus support and 256GB storage',
      image: 'https://via.placeholder.com/300x200?text=Tablet'
    },
    {
      id: 28,
      name: 'Wireless Earbuds',
      price: 149.99,
      category: 'Electronics',
      description: 'True wireless earbuds with active noise cancellation',
      image: 'https://via.placeholder.com/300x200?text=Earbuds'
    },
    {
      id: 29,
      name: 'Smart Speaker',
      price: 99.99,
      category: 'Electronics',
      description: 'Voice-controlled smart speaker with premium sound',
      image: 'https://via.placeholder.com/300x200?text=Smart+Speaker'
    },

    // Clothing
    {
      id: 4,
      name: 'Men\'s T-Shirt',
      price: 29.99,
      category: 'Clothing',
      description: 'Comfortable cotton t-shirt with modern fit',
      image: 'https://via.placeholder.com/300x200?text=T-Shirt'
    },
    {
      id: 5,
      name: 'Women\'s Dress',
      price: 59.99,
      category: 'Clothing',
      description: 'Elegant summer dress with floral pattern',
      image: 'https://via.placeholder.com/300x200?text=Dress'
    },
    {
      id: 10,
      name: 'Jeans',
      price: 49.99,
      category: 'Clothing',
      description: 'Classic fit denim jeans with stretch',
      image: 'https://via.placeholder.com/300x200?text=Jeans'
    },
    {
      id: 14,
      name: 'Winter Jacket',
      price: 129.99,
      category: 'Clothing',
      description: 'Warm and stylish winter coat with hood',
      image: 'https://via.placeholder.com/300x200?text=Winter+Jacket'
    },
    {
      id: 17,
      name: 'Running Shoes',
      price: 89.99,
      category: 'Clothing',
      description: 'Lightweight running shoes with cushioning',
      image: 'https://via.placeholder.com/300x200?text=Running+Shoes'
    },
    {
      id: 25,
      name: 'Formal Suit',
      price: 199.99,
      category: 'Clothing',
      description: 'Classic fit formal suit with matching trousers',
      image: 'https://via.placeholder.com/300x200?text=Formal+Suit'
    },
    {
      id: 30,
      name: 'Leather Jacket',
      price: 159.99,
      category: 'Clothing',
      description: 'Premium leather jacket with quilted lining',
      image: 'https://via.placeholder.com/300x200?text=Leather+Jacket'
    },
    {
      id: 31,
      name: 'Casual Sneakers',
      price: 69.99,
      category: 'Clothing',
      description: 'Comfortable sneakers for everyday wear',
      image: 'https://via.placeholder.com/300x200?text=Sneakers'
    },

    // Home & Kitchen
    {
      id: 6,
      name: 'Coffee Maker',
      price: 79.99,
      category: 'Home & Kitchen',
      description: 'Automatic coffee maker with timer and thermal carafe',
      image: 'https://via.placeholder.com/300x200?text=Coffee+Maker'
    },
    {
      id: 7,
      name: 'Blender',
      price: 49.99,
      category: 'Home & Kitchen',
      description: 'High-speed blender for smoothies and soups',
      image: 'https://via.placeholder.com/300x200?text=Blender'
    },
    {
      id: 11,
      name: 'Air Fryer',
      price: 89.99,
      category: 'Home & Kitchen',
      description: 'Healthy cooking with less oil, 5.8-quart capacity',
      image: 'https://via.placeholder.com/300x200?text=Air+Fryer'
    },
    {
      id: 15,
      name: 'Cookware Set',
      price: 199.99,
      category: 'Home & Kitchen',
      description: 'Complete set of non-stick cookware, 10 pieces',
      image: 'https://via.placeholder.com/300x200?text=Cookware'
    },
    {
      id: 18,
      name: 'Robot Vacuum',
      price: 299.99,
      category: 'Home & Kitchen',
      description: 'Smart robot vacuum with app control',
      image: 'https://via.placeholder.com/300x200?text=Robot+Vacuum'
    },
    {
      id: 26,
      name: 'Smart Thermostat',
      price: 149.99,
      category: 'Home & Kitchen',
      description: 'WiFi-enabled smart thermostat with app control',
      image: 'https://via.placeholder.com/300x200?text=Thermostat'
    },
    {
      id: 32,
      name: 'Stand Mixer',
      price: 249.99,
      category: 'Home & Kitchen',
      description: 'Professional stand mixer with multiple attachments',
      image: 'https://via.placeholder.com/300x200?text=Stand+Mixer'
    },
    {
      id: 33,
      name: 'Food Processor',
      price: 129.99,
      category: 'Home & Kitchen',
      description: 'Multi-functional food processor with 12-cup capacity',
      image: 'https://via.placeholder.com/300x200?text=Food+Processor'
    },

    // Books
    {
      id: 8,
      name: 'The Great Gatsby',
      price: 12.99,
      category: 'Books',
      description: 'Classic novel by F. Scott Fitzgerald',
      image: 'https://via.placeholder.com/300x200?text=Great+Gatsby'
    },
    {
      id: 12,
      name: 'To Kill a Mockingbird',
      price: 14.99,
      category: 'Books',
      description: 'Harper Lee\'s Pulitzer Prize-winning novel',
      image: 'https://via.placeholder.com/300x200?text=Mockingbird'
    },
    {
      id: 19,
      name: '1984',
      price: 11.99,
      category: 'Books',
      description: 'George Orwell\'s dystopian masterpiece',
      image: 'https://via.placeholder.com/300x200?text=1984'
    },
    {
      id: 27,
      name: 'The Hobbit',
      price: 15.99,
      category: 'Books',
      description: 'J.R.R. Tolkien\'s fantasy adventure',
      image: 'https://via.placeholder.com/300x200?text=Hobbit'
    },
    {
      id: 34,
      name: 'Pride and Prejudice',
      price: 10.99,
      category: 'Books',
      description: 'Jane Austen\'s classic romance novel',
      image: 'https://via.placeholder.com/300x200?text=Pride+Prejudice'
    },
    {
      id: 35,
      name: 'The Catcher in the Rye',
      price: 13.99,
      category: 'Books',
      description: 'J.D. Salinger\'s coming-of-age novel',
      image: 'https://via.placeholder.com/300x200?text=Catcher+Rye'
    },

    // Sports
    {
      id: 20,
      name: 'Yoga Mat',
      price: 29.99,
      category: 'Sports',
      description: 'Non-slip yoga mat with carrying strap',
      image: 'https://via.placeholder.com/300x200?text=Yoga+Mat'
    },
    {
      id: 21,
      name: 'Dumbbell Set',
      price: 79.99,
      category: 'Sports',
      description: 'Adjustable dumbbell set, 5-25 lbs',
      image: 'https://via.placeholder.com/300x200?text=Dumbbells'
    },
    {
      id: 36,
      name: 'Tennis Racket',
      price: 89.99,
      category: 'Sports',
      description: 'Professional tennis racket with carbon fiber frame',
      image: 'https://via.placeholder.com/300x200?text=Tennis+Racket'
    },
    {
      id: 37,
      name: 'Basketball',
      price: 24.99,
      category: 'Sports',
      description: 'Official size basketball with premium grip',
      image: 'https://via.placeholder.com/300x200?text=Basketball'
    },

    // Beauty
    {
      id: 38,
      name: 'Skincare Set',
      price: 59.99,
      category: 'Beauty',
      description: 'Complete skincare routine set with cleanser, toner, and moisturizer',
      image: 'https://via.placeholder.com/300x200?text=Skincare+Set'
    },
    {
      id: 39,
      name: 'Makeup Palette',
      price: 45.99,
      category: 'Beauty',
      description: 'Professional eyeshadow palette with 12 shades',
      image: 'https://via.placeholder.com/300x200?text=Makeup+Palette'
    },
    {
      id: 40,
      name: 'Hair Dryer',
      price: 79.99,
      category: 'Beauty',
      description: 'Ionic hair dryer with multiple heat settings',
      image: 'https://via.placeholder.com/300x200?text=Hair+Dryer'
    },

    // Toys
    {
      id: 41,
      name: 'Building Blocks',
      price: 39.99,
      category: 'Toys',
      description: 'Educational building blocks set with 100 pieces',
      image: 'https://via.placeholder.com/300x200?text=Building+Blocks'
    },
    {
      id: 42,
      name: 'Remote Control Car',
      price: 49.99,
      category: 'Toys',
      description: 'High-speed RC car with rechargeable battery',
      image: 'https://via.placeholder.com/300x200?text=RC+Car'
    },
    {
      id: 43,
      name: 'Board Game',
      price: 34.99,
      category: 'Toys',
      description: 'Family board game for 2-6 players',
      image: 'https://via.placeholder.com/300x200?text=Board+Game'
    }
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }

  getProductsByCategory(category: string): Product[] {
    return this.products.filter(product => product.category === category);
  }

  getCategories(): string[] {
    return [...new Set(this.products.map(product => product.category))];
  }
} 