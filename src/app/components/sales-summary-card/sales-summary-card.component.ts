import { Component, Input, OnInit } from '@angular/core';
import { SalesService } from '../../services/sales.service';
import { SalesSummary } from '../../models/app.types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sales-card',
  templateUrl: './sales-summary-card.component.html',
  styleUrls: ['./sales-summary-card.component.css'],
  imports: [CommonModule]
})
export class SalesCardComponent implements OnInit {
  @Input() title: string = ''; 
  @Input() territoryId?: number = undefined; 
  @Input() onlineSales?: boolean;  
  salesSummary: SalesSummary | null = null;
  
  // New property to track loading state
  loading: boolean = true;

  constructor(private salesService: SalesService) {}

  ngOnInit(): void {
    this.fetchSalesSummary();
  }

  fetchSalesSummary(): void {
    this.salesService.getSalesSummary(this.onlineSales, this.territoryId).subscribe(
      (data: SalesSummary) => {
        this.salesSummary = data;
        this.loading = false; // Data has been fetched successfully
      },
      error => {
        console.error('Error fetching sales summary:', error);
        this.loading = false; // Even if there's an error, we should stop loading
      }
    );
  }
}
