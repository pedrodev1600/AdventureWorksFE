import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductItem, ProductListItem } from '../models/app.types';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'https://localhost:7021/api/products';

  constructor(private http: HttpClient) {}

  addProduct(product: ProductItem): Observable<ProductItem> {
    return this.http.post<ProductItem>(this.apiUrl, product);
  }

  getProducts(): Observable<ProductListItem[]> {
    return this.http.get<ProductListItem[]>(this.apiUrl);
  }

  getProductByName(productName: string): Observable<ProductItem> {
    const url = `${this.apiUrl}/${productName}`;
    return this.http.get<ProductItem>(url);
  }

  deleteProduct(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  updateProduct(product: ProductItem): Observable<ProductItem> {
    const url = `${this.apiUrl}/${product.productId}`;
    return this.http.put<ProductItem>(url, product);
  }
}
