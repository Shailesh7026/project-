import { Component, OnInit } from '@angular/core';
import { ProductApiService } from '../service/product-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categories: string[] = ['Smart Phone', 'Grocery', 'Sports', 'toys'];
  products: { [category: string]: any[] } = {};

  constructor(private productApiService: ProductApiService) {}

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    for (const category of this.categories) {
      this.productApiService.getProductDetails('', category, 1).subscribe(
        (data: any) => {
          const categoryProducts = data.slice(0, 4);
          this.products[category] = categoryProducts;
        },
        (error: any) => {
          console.error(error);
        }
      );
    }
  }

  getCategoryProducts(category: string): any[] {
    return this.products[category] || [];
  }
}
