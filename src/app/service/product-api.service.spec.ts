import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {
  private apiEndpoint = 'https://ecommerce-product-api1.p.rapidapi.com/data';

  constructor(private http: HttpClient) { }

  getProductDetails(category: string, productName: string, page: number): Observable<any> {
    const url = `${this.apiEndpoint}?category=${category}&product=${productName}&page=${page}`;

    return this.http.get(url, {
      headers: {
        'X-RapidAPI-Key': '10d9af93b1msh1303b90bac0f0d6p114787jsn5aac20c10b93',
        'X-RapidAPI-Host': 'ecommerce-product-api1.p.rapidapi.com'
      }
    });
  }
}

