import { Component, Input } from '@angular/core';
import { SalesService } from '../../services/sales.service';
import { ProductGroupedSale } from '../../models/app.types';
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';

@Component({
  selector: 'app-territory-product-sales-grid',
  imports: [DxDataGridModule],
  templateUrl: './territory-product-sales-grid.component.html',
  styleUrl: './territory-product-sales-grid.component.css'
})
export class TerritoryProductSalesGridComponent {
  @Input() territoryId: number = 0
  @Input() territoryName: string = '';
  groupedProducts: ProductGroupedSale[] = [];
  constructor(private salesService: SalesService) {}

  ngOnInit(): void {
    this.salesService.getTerritoryGroupedProductSales(this.territoryId).subscribe(
      (data: ProductGroupedSale[]) => {
        this.groupedProducts = data; 
      },
      (error) => {
        console.error('Error fetching data', error); 
      }
    );
  }
}
