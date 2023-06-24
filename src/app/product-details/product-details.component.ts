import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductApiService } from 'src/app/service/product-api.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: any;

  constructor(private route: ActivatedRoute, private productApiService: ProductApiService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const productName = params.get('name');
      if (productName) {
        this.fetchProductDetails(productName);
      }
    });
  }

  fetchProductDetails(productName: string) {
    console.log(productName);
    const category = 'phone';
    this.productApiService.getProductDetails(category, productName, 1)
      .subscribe(
        (data: any) => {
          if (data && data.length > 0) {
            this.product = data[0];
          }
        },
        (error: any) => {
          console.error(error);
        }
      );
  }
}
