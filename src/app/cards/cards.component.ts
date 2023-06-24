import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductApiService } from 'src/app/service/product-api.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  productDetails: any[] = [];
  currentPage: number = 1;
  productName: string = 'smartphones';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productApiService: ProductApiService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.productName = params['productName'] || 'smartphones';
      this.fetchProductDetails(this.productName);
    });
  }

  fetchProductDetails(productName: string) {
    const category = 'phone';
    this.productApiService.getProductDetails(category, productName, this.currentPage)
      .subscribe(
        (data: any) => {
          this.productDetails = data;
        },
        (error: any) => {
          console.error(error);
        }
      );
  }

  nextPage() {
    this.currentPage++;
    this.fetchProductDetails(this.productName);
    console.log('next page');
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.fetchProductDetails(this.productName);
    }
  }

  addToCart(productName: string) {
    const selectedProduct = this.productDetails.find(product => product.title === productName);
    this.router.navigate(['/product-details'], { state: { product: selectedProduct } });
  }

  viewProductDetails(product: any) {
    this.router.navigate(['/product-details'], { state: { product: product } });
  }

  search(query: string) {
    this.productName = query;
    console.log('Searching for:', this.productName);
    this.fetchProductDetails(this.productName);
  }
  
    searchProduct(productName: string) {
      this.router.navigate(['/card'], { queryParams: { productName: productName } });
    }
  
   productfound(): number {
    return Math.floor(Math.random() * (200 - 100 + 1)) + 100;
  }
}
