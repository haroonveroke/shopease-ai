import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    // Electronics
    {
      id: '1',
      name: 'iPhone 15 Pro',
      price: 999.99,
      category: 'Electronics',
      description: 'Latest iPhone with A17 Pro chip and titanium design',
      image: 'https://picsum.photos/300/200?grayscale&blur=2&image=1'
    },
    {
      id: '2',
      name: 'MacBook Pro M3',
      price: 1999.99,
      category: 'Electronics',
      description: 'Powerful laptop with M3 chip and Liquid Retina XDR display',
      image: 'https://picsum.photos/300/200?grayscale&blur=2&image=2'
    },
    {
      id: '3',
      name: 'AirPods Pro',
      price: 249.99,
      category: 'Electronics',
      description: 'Active noise cancellation and spatial audio',
      image: 'https://picsum.photos/300/200?grayscale&blur=2&image=3'
    },
    {
      id: '4',
      name: 'Apple Watch Series 9',
      price: 399.99,
      category: 'Electronics',
      description: 'Advanced health features and Always-On Retina display',
      image: 'https://picsum.photos/300/200?grayscale&blur=2&image=4'
    },
    {
      id: '5',
      name: 'iPad Pro',
      price: 799.99,
      category: 'Electronics',
      description: 'M2 chip and Liquid Retina XDR display',
      image: 'https://picsum.photos/300/200?grayscale&blur=2&image=5'
    },
    {
      id: '9',
      name: 'Smart Watch',
      price: 249.99,
      category: 'Electronics',
      description: 'Fitness tracker with heart rate monitor and GPS',
      image: 'https://picsum.photos/300/200?grayscale&blur=2&image=6'
    },
    {
      id: '13',
      name: 'Gaming Console',
      price: 399.99,
      category: 'Electronics',
      description: 'Next-gen gaming experience with 4K resolution',
      image: 'https://picsum.photos/300/200?grayscale&blur=2&image=7'
    },
    {
      id: '16',
      name: '4K Smart TV',
      price: 799.99,
      category: 'Electronics',
      description: '55-inch 4K UHD Smart TV with HDR',
      image: 'https://picsum.photos/300/200?grayscale&blur=2&image=8'
    },
    {
      id: '24',
      name: 'Tablet Pro',
      price: 499.99,
      category: 'Electronics',
      description: '10-inch tablet with stylus support and 256GB storage',
      image: 'https://picsum.photos/300/200?grayscale&blur=2&image=9'
    },
    {
      id: '28',
      name: 'Wireless Earbuds',
      price: 149.99,
      category: 'Electronics',
      description: 'True wireless earbuds with active noise cancellation',
      image: 'https://picsum.photos/300/200?grayscale&blur=2&image=10'
    },
    {
      id: '29',
      name: 'Smart Speaker',
      price: 99.99,
      category: 'Electronics',
      description: 'Voice-controlled smart speaker with premium sound',
      image: 'https://picsum.photos/300/200?grayscale&blur=2&image=11'
    },

    // Clothing
    {
      id: '6',
      name: 'Nike Air Max',
      price: 129.99,
      category: 'Clothing',
      description: 'Classic sneakers with Air cushioning',
      image: 'https://picsum.photos/300/200?grayscale&blur=2&image=12'
    },
    {
      id: '7',
      name: 'Levi\'s 501 Jeans',
      price: 69.99,
      category: 'Clothing',
      description: 'Original fit jeans with button fly',
      image: 'https://picsum.photos/300/200?grayscale&blur=2&image=13'
    },
    {
      id: '8',
      name: 'North Face Jacket',
      price: 199.99,
      category: 'Clothing',
      description: 'Waterproof and breathable outerwear',
      image: 'https://picsum.photos/300/200?grayscale&blur=2&image=14'
    },
    {
      id: '9',
      name: 'Adidas T-Shirt',
      price: 29.99,
      category: 'Clothing',
      description: 'Classic three-stripe design',
      image: 'https://picsum.photos/300/200?grayscale&blur=2&image=15'
    },
    {
      id: '10',
      name: 'Ralph Lauren Polo',
      price: 89.99,
      category: 'Clothing',
      description: 'Iconic polo shirt with embroidered logo',
      image: 'https://picsum.photos/300/200?grayscale&blur=2&image=16'
    },
    {
      id: '14',
      name: 'Winter Jacket',
      price: 129.99,
      category: 'Clothing',
      description: 'Warm and stylish winter coat with hood',
      image: 'https://picsum.photos/300/200?grayscale&blur=2&image=17'
    },
    {
      id: '17',
      name: 'Running Shoes',
      price: 89.99,
      category: 'Clothing',
      description: 'Lightweight running shoes with cushioning',
      image: 'https://picsum.photos/300/200?grayscale&blur=2&image=18'
    },
    {
      id: '25',
      name: 'Formal Suit',
      price: 199.99,
      category: 'Clothing',
      description: 'Classic fit formal suit with matching trousers',
      image: 'https://picsum.photos/300/200?grayscale&blur=2&image=19'
    },
    {
      id: '30',
      name: 'Leather Jacket',
      price: 159.99,
      category: 'Clothing',
      description: 'Premium leather jacket with quilted lining',
      image: 'https://picsum.photos/300/200?grayscale&blur=2&image=20'
    },
    {
      id: '31',
      name: 'Casual Sneakers',
      price: 69.99,
      category: 'Clothing',
      description: 'Comfortable sneakers for everyday wear',
      image: 'https://picsum.photos/300/200?grayscale&blur=2&image=21'
    },

    // Home & Kitchen
    {
      id: '11',
      name: 'KitchenAid Mixer',
      price: 399.99,
      category: 'Home & Kitchen',
      description: 'Professional 5-quart stand mixer',
      image: 'https://picsum.photos/300/200?grayscale&blur=2&image=22'
    },
    {
      id: '12',
      name: 'Dyson Vacuum',
      price: 499.99,
      category: 'Home & Kitchen',
      description: 'Cordless stick vacuum with powerful suction',
      image: 'https://picsum.photos/300/200?grayscale&blur=2&image=23'
    },
    {
      id: '13',
      name: 'Instant Pot',
      price: 99.99,
      category: 'Home & Kitchen',
      description: '7-in-1 multi-cooker',
      image: 'https://picsum.photos/300/200?grayscale&blur=2&image=24'
    },
    {
      id: '14',
      name: 'Nespresso Machine',
      price: 199.99,
      category: 'Home & Kitchen',
      description: 'Compact coffee maker with milk frother',
      image: 'https://picsum.photos/300/200?grayscale&blur=2&image=25'
    },
    {
      id: '15',
      name: 'Vitamix Blender',
      price: 449.99,
      category: 'Home & Kitchen',
      description: 'Professional-grade blender',
      image: 'https://picsum.photos/300/200?grayscale&blur=2&image=26'
    },
    {
      id: '18',
      name: 'Robot Vacuum',
      price: 299.99,
      category: 'Home & Kitchen',
      description: 'Smart robot vacuum with app control',
      image: 'https://picsum.photos/300/200?grayscale&blur=2&image=27'
    },
    {
      id: '26',
      name: 'Smart Thermostat',
      price: 149.99,
      category: 'Home & Kitchen',
      description: 'WiFi-enabled smart thermostat with app control',
      image: 'https://picsum.photos/300/200?grayscale&blur=2&image=28'
    },
    {
      id: '32',
      name: 'Stand Mixer',
      price: 249.99,
      category: 'Home & Kitchen',
      description: 'Professional stand mixer with multiple attachments',
      image: 'https://picsum.photos/300/200?grayscale&blur=2&image=29'
    },
    {
      id: '33',
      name: 'Food Processor',
      price: 129.99,
      category: 'Home & Kitchen',
      description: 'Multi-functional food processor with 12-cup capacity',
      image: 'https://picsum.photos/300/200?grayscale&blur=2&image=30'
    },

    // Books
    {
      id: '16',
      name: 'The Great Gatsby',
      price: 12.99,
      category: 'Books',
      description: 'Classic novel by F. Scott Fitzgerald',
      image: 'https://picsum.photos/300/200?grayscale&blur=2&image=31'
    },
    {
      id: '17',
      name: 'To Kill a Mockingbird',
      price: 14.99,
      category: 'Books',
      description: 'Harper Lee\'s Pulitzer Prize-winning novel',
      image: 'https://picsum.photos/300/200?grayscale&blur=2&image=32'
    },
    {
      id: '18',
      name: '1984',
      price: 11.99,
      category: 'Books',
      description: 'George Orwell\'s dystopian masterpiece',
      image: 'https://picsum.photos/300/200?grayscale&blur=2&image=33'
    },
    {
      id: '19',
      name: 'Pride and Prejudice',
      price: 10.99,
      category: 'Books',
      description: 'Jane Austen\'s classic romance',
      image: 'https://picsum.photos/300/200?grayscale&blur=2&image=34'
    },
    {
      id: '20',
      name: 'The Hobbit',
      price: 15.99,
      category: 'Books',
      description: 'J.R.R. Tolkien\'s fantasy adventure',
      image: 'https://picsum.photos/300/200?grayscale&blur=2&image=35'
    },
    {
      id: '34',
      name: 'The Catcher in the Rye',
      price: 13.99,
      category: 'Books',
      description: 'J.D. Salinger\'s coming-of-age novel',
      image: 'https://picsum.photos/300/200?grayscale&blur=2&image=36'
    },

    // Sports
    {
      id: '21',
      name: 'Nike Basketball',
      price: 29.99,
      category: 'Sports',
      description: 'Official size basketball',
      image: 'https://picsum.photos/300/200?grayscale&blur=2&image=37'
    },
    {
      id: '22',
      name: 'Yoga Mat',
      price: 39.99,
      category: 'Sports',
      description: 'Non-slip yoga mat with carrying strap',
      image: 'https://picsum.photos/300/200?grayscale&blur=2&image=38'
    },
    {
      id: '23',
      name: 'Dumbbell Set',
      price: 149.99,
      category: 'Sports',
      description: 'Adjustable weight set',
      image: 'https://picsum.photos/300/200?grayscale&blur=2&image=39'
    },
    {
      id: '24',
      name: 'Tennis Racket',
      price: 89.99,
      category: 'Sports',
      description: 'Professional tennis racket',
      image: 'https://picsum.photos/300/200?grayscale&blur=2&image=40'
    },
    {
      id: '25',
      name: 'Running Shoes',
      price: 129.99,
      category: 'Sports',
      description: 'Lightweight running shoes',
      image: 'https://picsum.photos/300/200?grayscale&blur=2&image=41'
    },

    // Beauty
    {
      id: '26',
      name: 'MAC Lipstick',
      price: 19.99,
      category: 'Beauty',
      description: 'Matte lipstick in Ruby Woo',
      image: 'https://picsum.photos/300/200?grayscale&blur=2&image=42'
    },
    {
      id: '27',
      name: 'Estée Lauder Serum',
      price: 89.99,
      category: 'Beauty',
      description: 'Advanced Night Repair serum',
      image: 'https://picsum.photos/300/200?grayscale&blur=2&image=43'
    },
    {
      id: '28',
      name: 'Dyson Hair Dryer',
      price: 399.99,
      category: 'Beauty',
      description: 'Supersonic hair dryer',
      image: 'https://picsum.photos/300/200?grayscale&blur=2&image=44'
    },
    {
      id: '29',
      name: 'Chanel Perfume',
      price: 129.99,
      category: 'Beauty',
      description: 'Classic No. 5 fragrance',
      image: 'https://picsum.photos/300/200?grayscale&blur=2&image=45'
    },
    {
      id: '30',
      name: 'La Mer Cream',
      price: 349.99,
      category: 'Beauty',
      description: 'Moisturizing cream',
      image: 'https://picsum.photos/300/200?grayscale&blur=2&image=46'
    },

    // Toys
    {
      id: '31',
      name: 'LEGO Set',
      price: 79.99,
      category: 'Toys',
      description: 'Star Wars Millennium Falcon',
      image: 'https://picsum.photos/300/200?grayscale&blur=2&image=47'
    },
    {
      id: '32',
      name: 'Barbie Dreamhouse',
      price: 199.99,
      category: 'Toys',
      description: '3-story dollhouse with accessories',
      image: 'https://picsum.photos/300/200?grayscale&blur=2&image=48'
    },
    {
      id: '33',
      name: 'Nintendo Switch',
      price: 299.99,
      category: 'Toys',
      description: 'Gaming console with Joy-Con controllers',
      image: 'https://picsum.photos/300/200?grayscale&blur=2&image=49'
    },
    {
      id: '34',
      name: 'Hot Wheels Track',
      price: 49.99,
      category: 'Toys',
      description: 'Race track set with cars',
      image: 'https://picsum.photos/300/200?grayscale&blur=2&image=50'
    },
    {
      id: '35',
      name: 'Play-Doh Set',
      price: 19.99,
      category: 'Toys',
      description: 'Creative fun with 10 colors',
      image: 'https://picsum.photos/300/200?grayscale&blur=2&image=51'
    }
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: string | number): Product | undefined {
    return this.products.find(product => product.id === id);
  }

  getProductsByCategory(category: string): Product[] {
    return this.products.filter(product => product.category === category);
  }

  getCategories(): string[] {
    return [...new Set(this.products.map(product => product.category))];
  }
} 