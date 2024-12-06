import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SalesOrder, SalesSummary, GroupedSale, ProductGroupedSale } from '../models/app.types';

@Injectable({
  providedIn: 'root',
})
export class SalesService {
  private apiUrl = 'https://localhost:7021/api/sales';

  constructor(private http: HttpClient) {}

  getSales(): Observable<SalesOrder[]> {
    return this.http.get<SalesOrder[]>(this.apiUrl);
  }

  addSale(sale: SalesOrder): Observable<SalesOrder> {
    return this.http.post<SalesOrder>(this.apiUrl, sale);
  }

  updateSale(id: number, sale: SalesOrder): Observable<SalesOrder> {
    return this.http.put<SalesOrder>(`${this.apiUrl}/${id}`, sale);
  }

  deleteSale(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getSalesSummary(onlineSales?: boolean, territoryId?: number): Observable<SalesSummary> {
    let url = `${this.apiUrl}/summary`;
  
    if (onlineSales != null) {
      url = appendQueryParam(url, 'onlinesales', onlineSales.toString());
    }
  
    if (territoryId != null) {
      url = appendQueryParam(url, 'territoryId', territoryId.toString());
    }
  
    return this.http.get<SalesSummary>(url);
  }

  getGroupedSales(url: string, limit?: number): Observable<GroupedSale[]> {
    let endpointUrl = `${this.apiUrl}` + url;

    if (limit !== undefined && limit !== null) {
      endpointUrl += `?limit=${limit}`;
    }

    return this.http.get<GroupedSale[]>(endpointUrl);
  }

  getTerritoryGroupedProductSales(territoryId: number): Observable<ProductGroupedSale[]> {
    let endpointUrl = `${this.apiUrl}/group/territory/product/` + territoryId;

    return this.http.get<ProductGroupedSale[]>(endpointUrl);
  }
}

function appendQueryParam(url: string, key: string, value: string): string {
  const separator = url.includes('?') ? '&' : '?';
  return `${url}${separator}${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
}


